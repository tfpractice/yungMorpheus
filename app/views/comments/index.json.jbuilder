json.array!(@comments) do |comment|
  json.extract! comment, :id, :authorable_id, :authorable_type, :commentable_id, :commentable_type, :content
  json.url comment_url(comment, format: :json)
end
