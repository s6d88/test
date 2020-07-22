<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVaraintsOptionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('varaints_options', function (Blueprint $table) {
            $table->id();
            $table->string("varaint_option_name");
            $table->string("price");
            $table->string("qty");
            $table->unsignedBigInteger('id_product');
            $table->foreign('id_product')->references('id')->on('products'); 
            $table->unsignedBigInteger('id_varaint');
            $table->foreign('id_varaint')->references('id')->on('varaints');
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
        Schema::dropIfExists('varaints_options');
    }
}
