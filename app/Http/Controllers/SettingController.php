<?php

namespace App\Http\Controllers;

use App\Setting;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    public function getFirst()
    {
        $settings = Setting::findOrFail(1);
		return $settings->only(['lineWidth']);
    }

    public function update(Request $request)
    {
        $settings = Setting::findOrFail(1);
        $settings->lineWidth = $request->input('lineWidth');
        $settings->save();
        return $settings->only(['lineWidth']);
    }
}
