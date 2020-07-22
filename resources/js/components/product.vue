<template>
    <div class="container">
        
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Produits</h3>

                <div class="card-tools">
                  <button data-toggle="modal" data-target="#Productcreate" class="btn btn-info shadow">
                    Crée 
                </button>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
                <table class="table table-hover text-nowrap">
                  <thead>
                    <tr>
                      <th>Nom</th>
                      <th>Qty</th>
                      <th>Prix</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>183</td>
                      <td>John Doe</td>
                      <td><span class="tag tag-success">Approved</span></td>
                      <td>
                        <a href="">edit </a>/
                        <a href="">Delete </a>
                      </td>
                    </tr>
                    
                    
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        </div>
        <!--sTART MODAL-->
            <!-- Modal -->
            <div class="modal fade" id="Productcreate" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Produit Detail</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                          <form role="form" @submit.prevent="createProduct" @keydown="form.onKeydown($event)">
                            <div class="row">
                              <div class="col-sm-12">
                                <!-- text input -->
                                <div class="form-group">
                                  <label>Nom</label>
                                <input v-model="form.productname" type="text" name="productname"
                                  class="form-control" :class="{ 'is-invalid': form.errors.has('productname') }">
                                <has-error :form="form" field="productname"></has-error>
                                </div>
                              </div>
                            </div>
                            
                            <div class="row">
                              <div class="col-sm-8">
                                <!-- checkbox -->
                                <div class="form-group clearfix">
                                  <div class="icheck-primary d-inline">
                                    <input type="checkbox" id="customSwitch" >
                                    <label for="customSwitch">
                                      Ce produit a plusieurs options, comme différentes tailles ou couleurs
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="row Togledvar" id="Togledvar">
                              <div class="insertrow container row">
                                <div class="col-sm-3">
                                  <!-- select -->
                                  <div class="form-group">
                                    <label>Options</label>
                                    <select class="custom-select" v-model="form.varaiant" type="text" name="varaiant"
                                    :class="{ 'is-invalid': form.errors.has('varaiant') }">
                                    
                                      <option value='size'>Size</option>
                                      <option value='color'>Color</option>
                                      <option value='material'>Material</option>
                                      <option value='style'>Style</option>
                                      <option value='tytle'>Title</option>
                                    </select>
                                    <has-error :form="form" field="varaiant"></has-error>
                                  </div>
                                </div>
                                <div class="col-sm-7">
                                  <div class="form-group">
                                    <label>Varaint</label>
                                    <input class="form-control"  placeholder="Enter ..." v-model="form.varaiantValues" type="text" name="varaiantValues[]"
                                    :class="{ 'is-invalid': form.errors.has('varaiantValues') }">
                                  </div>
                                </div>
                                <div class="col-sm-2">
                                  <div class="form-group">
                                    <label></label>
                                    <button class="form-control btn btn-info"  placeholder="Enter ...">Ajouter</button>
                                  </div>
                                </div>
                                </div>
                                  <div class="col-md-4">
                                    <div class="form-group">
                                      <button class="form-control" type="button" id="addOption" placeholder="Enter ...">Ajouter Option </button>
                                    </div>
                                  </div>
                              </div>
                              <div class="modal-footer">
                                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                  <button type="submit" class="btn btn-primary">Save changes</button>
                              </div>
                            
                          </form>
                        </div>
                       
                    </div>
                </div>
            </div>

            <!--End MODAL-->
        </div>
    </div>
</template>

<script>
    export default {
        data() {
          return {
            form : new Form({
              productname: '',
              qty: '',
              prix: '',
              varaiant: '',
              varaiantValues: ''
            })
          } 
        },
        mounted() {
            console.log('Component mounted.')
        },
        methods: {
          createProduct: function(){
            this.form.post('/product/create' , )
          } 
        }
          
    }
</script>
