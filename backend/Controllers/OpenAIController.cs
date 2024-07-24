using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using OpenAI;
using OpenAI.Managers;
using OpenAI.Extensions;
using OpenAI.ObjectModels;
using OpenAI.ObjectModels.RequestModels;

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
    public async Task<IActionResult> Ask([FromBody] string question)
    {
        try
        {
            var request = new OpenAI.ObjectModels.RequestModels.ChatCompletionCreateRequest
            {
                Messages = new List<ChatMessage>
            {
                ChatMessage.FromSystem("You are a helpful assistant."),
                ChatMessage.FromUser(question),
            },
                Model = Models.Gpt_4o_mini,
            };

            var completionResult = await _openAIService.ChatCompletion.CreateCompletion(request);
            if (completionResult.Successful)
            {
                return Ok(completionResult.Choices[0].Message.Content);
            }

            return StatusCode(500, "Error retrieving response from OpenAI.");
        }
        catch (Exception e)
        {
            Console.WriteLine($"Error: {e.Message}");
            return StatusCode(500, "Internal Error.");
        }
    }
}