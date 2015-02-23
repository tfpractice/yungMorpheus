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

ActiveRecord::Schema.define(version: 20150223205230) do

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
  end

  add_index "articles", ["section_type", "section_id"], name: "index_articles_on_section_type_and_section_id", using: :btree
  add_index "articles", ["serial_type", "serial_id"], name: "index_articles_on_serial_type_and_serial_id", using: :btree

  create_table "sections", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.boolean  "published"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "serials", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.integer  "section_id"
    t.string   "section_type"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "serials", ["section_type", "section_id"], name: "index_serials_on_section_type_and_section_id", using: :btree

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

end
