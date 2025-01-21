import json
import os

def get_repo_stats():
    filepath = os.path.join(os.path.dirname(__file__), 'data.json')
    with open(filepath, 'r') as file:
        data = json.load(file)
    return data
