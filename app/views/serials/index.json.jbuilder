json.array!(@serials) do |serial|
  json.extract! serial, :id, :name, :description, :section_id, :section_type
  json.url serial_url(serial, format: :json)
end
