<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->increments('id');
            $table->string('imageUrl');
            $table->string('aspectRatio');
            $table->boolean('drawButtonEnabled');
            $table->string('drawButtonClass');
            $table->string('drawButtonText');
            $table->boolean('clearButtonEnabled');
            $table->string('clearButtonClass');
            $table->string('clearButtonText');
            $table->string('undoButtonText');
            $table->boolean('undoButtonEnabled');
            $table->string('redoButtonText');
            $table->boolean('redoButtonEnabled');
            $table->boolean('colorPickerEnabled');
            $table->boolean('saveDataButtonEnabled');
            $table->string('saveDataButtonText');
            $table->string('lineWidth');
            $table->string('strokeColor');
            $table->boolean('shouldDownloadDrawing');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('settings');
    }
}
