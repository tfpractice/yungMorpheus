# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150406205758) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "articles", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.text     "content"
    t.integer  "section_id"
    t.string   "section_type"
    t.integer  "serial_id"
    t.string   "serial_type"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.string   "header"
    t.datetime "publish_date"
    t.boolean  "featured"
  end

  add_index "articles", ["section_type", "section_id"], name: "index_articles_on_section_type_and_section_id", using: :btree
  add_index "articles", ["serial_type", "serial_id"], name: "index_articles_on_serial_type_and_serial_id", using: :btree

  create_table "datasets", force: :cascade do |t|
    t.string   "name"
    t.integer  "article_id"
    t.string   "article_type"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.string   "data"
  end

  add_index "datasets", ["article_type", "article_id"], name: "index_datasets_on_article_type_and_article_id", using: :btree

  create_table "images", force: :cascade do |t|
    t.string   "name"
    t.integer  "article_id"
    t.string   "article_type"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.string   "img"
  end

  add_index "images", ["article_type", "article_id"], name: "index_images_on_article_type_and_article_id", using: :btree

  create_table "scripts", force: :cascade do |t|
    t.string   "name"
    t.integer  "article_id"
    t.string   "article_type"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.string   "jscript"
  end

  add_index "scripts", ["article_type", "article_id"], name: "index_scripts_on_article_type_and_article_id", using: :btree

  create_table "sections", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.boolean  "published"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "header"
  end

  create_table "serials", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.integer  "section_id"
    t.string   "section_type"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.string   "header"
    t.boolean  "featured"
  end

  add_index "serials", ["section_type", "section_id"], name: "index_serials_on_section_type_and_section_id", using: :btree

  create_table "taggings", force: :cascade do |t|
    t.integer  "tag_id"
    t.integer  "taggable_id"
    t.string   "taggable_type"
    t.integer  "tagger_id"
    t.string   "tagger_type"
    t.string   "context",       limit: 128
    t.datetime "created_at"
  end

  add_index "taggings", ["tag_id", "taggable_id", "taggable_type", "context", "tagger_id", "tagger_type"], name: "taggings_idx", unique: true, using: :btree
  add_index "taggings", ["taggable_id", "taggable_type", "context"], name: "index_taggings_on_taggable_id_and_taggable_type_and_context", using: :btree

  create_table "tags", force: :cascade do |t|
    t.string  "name"
    t.integer "taggings_count", default: 0
  end

  add_index "tags", ["name"], name: "index_tags_on_name", unique: true, using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

  create_table "viewers", force: :cascade do |t|
    t.string   "provider"
    t.string   "uid"
    t.string   "screenname"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
  end

  add_index "viewers", ["email"], name: "index_viewers_on_email", unique: true, using: :btree
  add_index "viewers", ["reset_password_token"], name: "index_viewers_on_reset_password_token", unique: true, using: :btree

end
