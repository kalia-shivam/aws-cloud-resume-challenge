# tests/test_lambda_handler.py

import pytest
from unittest.mock import MagicMock, patch
from infra.lambda_function.cloud_resume_function import lambda_handler  # Replace 'lambda_function' with your actual module name

@pytest.fixture
def mock_dynamodb_table():
    mock_table = MagicMock()
    return mock_table

@patch('lambda_function.table', mock_dynamodb_table())
def test_lambda_handler_increment(mock_dynamodb_table):
    event = {}
    context = {}
    mock_dynamodb_table.get_item.return_value = {
        'Item': {'id': '1', 'views': 5}  # Mock DynamoDB response
    }

    result = lambda_handler(event, context)

    assert result == 6  # Verify views are incremented correctly
    mock_dynamodb_table.get_item.assert_called_once_with(Key={'id': '0'})
    mock_dynamodb_table.put_item.assert_called_once_with(Item={'id': '0', 'views': 6})
