using Microsoft.EntityFrameworkCore;
using backend.Repositories;
using backend.Data;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddSqlite<SnackContext>("Data Source=snack.db");
// if (builder.Environment.IsDevelopment())
// {
//     builder.Services.AddDbContext<SnackContext>(options =>
//         options.UseInMemoryDatabase("Snack"));
// }
// else
// {
//     builder.Services.AddDbContext<SnackContext>(options =>
//         options.UseSqlServer(builder.Configuration.GetConnectionString("SnackContext") ?? throw new InvalidOperationException("Connection string 'SnackContext' not found."))
//     );
// }
builder.Services.AddScoped<ISnackRepository, SnackRepository>();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy =>
        {
            policy.WithOrigins("http://localhost:5173")
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


var app = builder.Build();

// Enable CORS
app.UseCors("AllowReactApp");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
