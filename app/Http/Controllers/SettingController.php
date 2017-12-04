<?php

namespace App\Http\Controllers;

use App\Setting;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    public function getFirst()
    {
        $settings = Setting::findOrFail(1);
		return $settings->only([
	        'aspectRatio',
			'drawButtonEnabled',
			'drawButtonClass',
			'drawButtonText',
			'clearButtonEnabled',
			'clearButtonClass',
			'clearButtonText',
			'undoButtonText',
			'undoButtonEnabled',
			'redoButtonText',
			'redoButtonEnabled',
			'colorPickerEnabled',
			'saveDataButtonEnabled',
			'saveDataButtonText',
			'lineWidth',
			'strokeColor',
			'shouldDownloadDrawing']);
    }

    public function update(Request $request)
    {
        $settings = Setting::findOrFail(1);
        $settings->lineWidth = $request->input('lineWidth');
        $settings->save();
        return [];
    }
}
