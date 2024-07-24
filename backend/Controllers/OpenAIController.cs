using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using OpenAI;
using OpenAI.Managers;
using OpenAI.Extensions;
using OpenAI.ObjectModels;
using OpenAI.ObjectModels.RequestModels;
using System.Text.Json;
using backend.Models;

[ApiController]
[Route("api/[controller]")]
public class OpenAIController : ControllerBase
{
    private readonly OpenAIService _openAIService;

    public OpenAIController(OpenAIService openAIService)
    {
        _openAIService = openAIService;
    }

    [HttpPost]
    public async Task<IActionResult> Ask([FromBody] AskRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.Question))
        {
            return BadRequest("The question field is required.");
        }

        var messages = new List<ChatMessage>
        {
            ChatMessage.FromSystem("You are a helpful data analysis assistant."),
            ChatMessage.FromUser(request.Question)
        };

        if (request.Stocks != null && request.Stocks.Any())
        {
            var stockData = JsonSerializer.Serialize(request.Stocks);
            messages.Add(ChatMessage.FromUser($"Here is the stocks data: {stockData}"));
        }

        var chatRequest = new OpenAI.ObjectModels.RequestModels.ChatCompletionCreateRequest
        {
            Messages = messages,
            Model = Models.Gpt_4o_mini,
        };

        var completionResult = await _openAIService.ChatCompletion.CreateCompletion(chatRequest);
        if (completionResult.Successful)
        {
            return Ok(completionResult.Choices[0].Message.Content);
        }

        return StatusCode(500, "Error retrieving response from OpenAI.");
    }

    public class AskRequest
    {
        public string Question { get; set; }
        public List<SimpleStock> Stocks { get; set; }
    }
}