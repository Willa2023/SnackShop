using Microsoft.EntityFrameworkCore;
using backend.Repositories;
using backend.Data;
using Microsoft.OpenApi.Models;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using Microsoft.Extensions.DependencyInjection;
using OpenAI;
using OpenAI.Managers;
using OpenAI.Extensions;
using OpenAI.ObjectModels;
using OpenAI.ObjectModels.RequestModels;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddSqlite<SnackShopContext>("Data Source=snackshop.db");

builder.Services.AddScoped<ISnackRepository, SnackRepository>();
builder.Services.AddScoped<IStockRepository, StockRepository>();
builder.Services.AddScoped<ISellRepository, SellRepository>();
builder.Services.AddScoped<ICartItemRepository, CartItemRepository>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy =>
        {
            policy.AllowAnyOrigin()
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSingleton<OpenAIService>(new OpenAIService(
        new OpenAiOptions()
        {
            ApiKey = Environment.GetEnvironmentVariable("OPENAI_API_KEY") ?? string.Empty
        }
));

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

app.UseStaticFiles();

app.UseAuthorization();

app.MapControllers();

app.Run();
