using MassTransit;
using SearchService.Consumers;
using SearchService.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
// basic config for connecting MassTransit
builder.Services.AddMassTransit(x =>
{
    x.AddConsumersFromNamespaceContaining<AuctionCreatedConsumer>();

    x.SetEndpointNameFormatter(new KebabCaseEndpointNameFormatter("search", false));

    x.UsingRabbitMq((context, cfg) =>
    {
        cfg.Host(builder.Configuration["RabbitMq:Host"], "/", host =>
        {
            host.Username(builder.Configuration.GetValue("RabbitMq:Username", "guest"));
            host.Password(builder.Configuration.GetValue("RabbitMq:Password", "guest"));
        });

        // configure specific endpoint
        cfg.ReceiveEndpoint("search-auction-created", e =>
        {
            // 5 number of retries
            // 5s in between the retries (wait for 5s for each interval)
            e.UseMessageRetry(r => r.Interval(5, 5));

            // which consumer we're configuring this for
            e.ConfigureConsumer<AuctionCreatedConsumer>(context);
        });

        // configure all endpoints based on the consumers we have
        cfg.ConfigureEndpoints(context);
    });
}
);

var app = builder.Build();

app.UseAuthorization();

app.MapControllers();

try
{
    await DbInitializer.InitDb(app);
}
catch (Exception e)
{

    Console.WriteLine(e);
}

app.Run();
