<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
	protected $fillable = [
		'imageUrl',
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
		'shouldDownloadDrawing',
    ];

    protected $casts = [
		'aspectRatio' => 'float',
		'lineWidth' => 'integer',
		'drawButtonEnabled' => 'boolean',
		'clearButtonEnabled' => 'boolean',
		'undoButtonEnabled' => 'boolean',
		'redoButtonEnabled' => 'boolean',
		'colorPickerEnabled' => 'boolean',
		'saveDataButtonEnabled' => 'boolean',
		'shouldDownloadDrawing' => 'boolean',
    ];
}
