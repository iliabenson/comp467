<?php

use Illuminate\Database\Seeder;

class SettingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\Setting::create([
			'imageUrl' => 'http://comp586.app/api/settings',
			'aspectRatio' => '.5',
			'drawButtonEnabled' => TRUE,
			'drawButtonClass' => 'drawButtonClass',
			'drawButtonText' => 'Draw',
			'clearButtonEnabled' => TRUE,
			'clearButtonClass' => 'clearButtonClass',
			'clearButtonText' => 'Clear',
			'undoButtonText' => 'Undo',
			'undoButtonEnabled' => TRUE,
			'redoButtonText' => 'Redo',
			'redoButtonEnabled' => TRUE,
			'colorPickerEnabled' => TRUE,
			'saveDataButtonEnabled' => TRUE,
			'saveDataButtonText' => 'Save',
			'lineWidth' => '5',
			'strokeColor' => 'rgb(0,0,0)',
			'shouldDownloadDrawing' => TRUE
		]);
    }
}
