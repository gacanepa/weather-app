# Copilot Instructions for Weather App

This document provides instructions and context for GitHub Copilot when working with this repository.

## Project Overview

This is a weather application that provides weather information to users. The project uses Node.js as indicated by the project configuration.

## Code Style and Conventions

- Follow JavaScript/TypeScript best practices
- Use meaningful variable and function names
- Write clean, readable, and maintainable code
- Include appropriate error handling
- Add comments for complex logic

## Testing

- Write unit tests for new functionality
- Ensure existing tests pass before submitting changes
- Follow the existing test patterns in the repository

## Documentation

- Update README.md when adding new features
- Document API endpoints and their usage
- Include JSDoc comments for functions and classes

## Security

- Never commit API keys, secrets, or credentials
- Use environment variables for sensitive configuration
- Validate and sanitize user inputs
- Follow security best practices for web applications

## Weather API Integration

When working with weather APIs:
- Handle API rate limits gracefully
- Cache responses when appropriate
- Provide meaningful error messages for API failures
- Support multiple weather data providers if possible

## Pull Requests

- Keep changes focused and atomic
- Write descriptive commit messages
- Include relevant tests with code changes
- Update documentation as needed
