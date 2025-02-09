<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use App\Varaint;
use App\Varaint_Option;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'productname' => 'required|max:4',
            'varaiant' => 'required',
            'varaiantValues' => 'required',
            'varaiantValues' => 'required',
        ]);

        
        Product::create([
            'name' => $validated['productname'],
        ]);
        Varaint::create([
            'varaint_name' => $validated['varaint_name'],
            'id_product' => $validated['id_product'],
        ]);
        Varaint_Option::create([
            'varaint_option_name' => $validated[''],
            'price' => $validated[''],
            'qty' => $validated[''],
            'id_product' => $validated[''],
            'id_varaint' => $validated[''],
        ]);
        return redirect('/product');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
