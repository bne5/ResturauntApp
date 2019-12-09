class CreateMenus < ActiveRecord::Migration[6.0]
  def change
    create_table :menus do |t|
      t.string :course
      t.boolean :service

      t.timestamps
    end
  end
end
