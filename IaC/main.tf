provider "aws" {
  region = "ap-south-1"
}

variable "app_name" {
  description = "Name of the Amplify app"
  type        = string
  default     = "Wordsmith"
}

variable "github_repository" {
  description = "GitHub repository URL"
  type        = string
  default     = "https://github.com/mohakbajaj/wordsmith"
}

variable "token" {
  description = "GitHub access token"
  type        = string
}

resource "aws_iam_role" "amplify_role" {
  name = "amplify_deploy_role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "amplify.amazonaws.com"
        }
      },
    ]
  })
}

resource "aws_amplify_app" "nextjs_app" {
  name                 = var.app_name
  repository           = var.github_repository
  access_token         = var.token
  build_spec           = <<-EOT
    version: 1
    frontend:
      phases:
        preBuild:
          commands:
            - npx pnpm install
        build:
          commands:
            - npx pnpm build
      artifacts:
        baseDirectory: .next
        files:
          - '**/*'
      cache:
        paths:
          - node_modules/**/*
 EOT
  iam_service_role_arn = aws_iam_role.amplify_role.arn
}

resource "aws_amplify_branch" "master" {
  app_id            = aws_amplify_app.nextjs_app.id
  branch_name       = "master"
  enable_auto_build = true
  framework         = "Next.js - SSR"
}

# Run the Following Commands
# terraform init
# terraform apply -auto-approve -var="token=YOUR_GITHUB"
