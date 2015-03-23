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

ActiveRecord::Schema.define(version: 20150323014040) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "perfis", force: :cascade do |t|
    t.string   "descricao"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "problemas", force: :cascade do |t|
    t.text     "descricao"
    t.text     "resposta"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "status_id"
    t.integer  "usuario_id"
    t.string   "titulo"
  end

  add_index "problemas", ["status_id"], name: "index_problemas_on_status_id", using: :btree
  add_index "problemas", ["usuario_id"], name: "index_problemas_on_usuario_id", using: :btree

  create_table "respostas", force: :cascade do |t|
    t.text     "descricao"
    t.integer  "usuario_id"
    t.integer  "problema_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "respostas", ["problema_id"], name: "index_respostas_on_problema_id", using: :btree
  add_index "respostas", ["usuario_id"], name: "index_respostas_on_usuario_id", using: :btree

  create_table "status", force: :cascade do |t|
    t.string   "descricao"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "usuarios", force: :cascade do |t|
    t.string   "nome"
    t.string   "email"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.integer  "perfil_id"
    t.string   "sobrenome"
    t.string   "provider",                            null: false
    t.string   "uid",                    default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email"
    t.text     "tokens"
  end

  add_index "usuarios", ["email"], name: "index_usuarios_on_email", using: :btree
  add_index "usuarios", ["perfil_id"], name: "index_usuarios_on_perfil_id", using: :btree
  add_index "usuarios", ["reset_password_token"], name: "index_usuarios_on_reset_password_token", unique: true, using: :btree
  add_index "usuarios", ["uid", "provider"], name: "index_usuarios_on_uid_and_provider", unique: true, using: :btree

  add_foreign_key "problemas", "status"
  add_foreign_key "problemas", "usuarios"
  add_foreign_key "respostas", "problemas"
  add_foreign_key "respostas", "usuarios"
end
