class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :task_name
      t.string :detail
      t.string :tag

      t.timestamps
    end
  end
end
