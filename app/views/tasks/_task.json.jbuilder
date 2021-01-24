json.extract! task, :id, :task_name, :detail, :tag, :created_at, :updated_at
json.url task_url(task, format: :json)
