from infra.lambda_function.cloud_resume_function import lambda_handler
import pytest
from unittest.mock import MagicMock, patch



@pytest.fixture
def mock_dynamodb_table():
    mock_table = MagicMock()
    return mock_table

@patch('infra.lambda_function.cloud_resume_function.table', new_callable=lambda: MagicMock())
def test_lambda_handler_increment(mock_table):
    event = {}
    context = {}
    mock_table.get_item.return_value = {
        'Item': {'id': '0', 'views': 5} 
    }

    result = lambda_handler(event, context)

    assert result == 6
    mock_table.get_item.assert_called_once_with(Key={'id': '0'})
    mock_table.put_item.assert_called_once_with(Item={'id': '0', 'views': 6})
