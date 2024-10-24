# AWS Cloud Resume Challenge
This project is part of the [Cloud Resume Challenge](https://cloudresumechallenge.dev/), where I built a resume website leveraging AWS services and Infrastructure as Code (IaC) using Terraform. The goal of the challenge is to demonstrate practical cloud skills, including infrastructure as code, cloud computing, and CI/CD pipelines.

# Project Overview
The AWS Cloud Resume Challenge is designed to showcase my knowledge of cloud computing using Amazon Web Services. I built a serverless resume website where users can view my resume and a visitor counter that tracks the number of page visits using DynamoDB.

# Architecture
# Frontend: 
The resume webpage is hosted on an S3 bucket configured for static website hosting. CloudFront is used as a CDN to improve performance and serve the website over HTTPS.
# Backend: 
The website includes a visitor counter feature that is powered by AWS Lambda and an API Gateway. The counter is stored in a DynamoDB table.
# CI/CD: 
GitHub Actions is used to automatically deploy changes to the frontend and backend. Infrastructure as Code (IaC) is handled through Terraform.

# Services Used
1. Amazon S3 - Static website hosting.
2. Amazon CloudFront - Content Delivery Network (CDN) for the website.
3. AWS Lambda - Serverless backend logic for the visitor counter.
4. Amazon DynamoDB - NoSQL database to store the visitor count.
5. Amazon API Gateway - API layer to expose the Lambda function.
6. AWS IAM - For access and permissions.
7. AWS Route 53 - Domain name management.
8. AWS Certificate Manager - For SSL certificate management.
9. GitHub Actions - CI/CD pipeline for automating deployments.
10. Terraform - Infrastructure as code for provisioning AWS resources.

# Backend
The backend functionality was implemented using AWS Lambda and DynamoDB. The API Gateway routes traffic to the Lambda function, which updates and retrieves the visitor count from the DynamoDB table. The Lambda function is written in Python and uses Boto3 to interact with DynamoDB.

# Backend Details:
Lambda Function: cloud_resume_function.py
DynamoDB Table: visitor_count
API Gateway: Exposes the Lambda function to frontend
Terraform: Used for provisioning backend infrastructure (main.tf, provider.tf)
Frontend
The frontend is a simple HTML and CSS static website hosted on Amazon S3. CloudFront is used to distribute the website globally with HTTPS enabled via SSL certificates from AWS Certificate Manager.

# Frontend Details:
Frontend Files: index.html, style.css, mediaqueries.css, script.js
Hosted on: S3
Distributed via: CloudFront
Portfolio Assets: Located in the my-portfolio-website/assets directory.
CI/CD Pipeline
A GitHub Actions workflow is set up to automate deployments. Whenever new code is pushed to the repository:

Frontend code is deployed to the S3 bucket.
Backend code (Lambda function) is packaged and deployed.

# CI/CD Details:
GitHub Actions Workflows:
front-end-cicd.yml for frontend
back-end-cicd.yml for backend
Terraform
Terraform was used to provision and manage the AWS infrastructure required for this project. The following resources were set up using Terraform:

S3 Bucket for hosting the frontend.
CloudFront Distribution for content delivery.
DynamoDB Table for visitor count storage.
Lambda Function for backend logic.
API Gateway for API management.
IAM Roles for secure access and permissions.
Terraform Files:
Main Configuration: main.tf
Provider Configuration: provider.tf
Testing
The backend functionality (Lambda function) is tested using Python's unit test framework.

# Test Details:
Test File: test_lambda_handler.py located in the tests directory
Test Coverage: Lambda handler function

# References
[AWS Cloud Resume Challenge Playlist By Rishab on Cloud](https://youtube.com/watch?v=NNKzYhvqq5w&list=PLK_LRl1CH4L_ko1-Xm04ATPTduu6gaSM8)
