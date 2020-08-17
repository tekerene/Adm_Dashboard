
/**
.The admission section, part of the  page of the project,**/

* @author  Awa Donalcien
* @date Date created 11 August 2020
* Contributors : Teke Rene
**/

<template>
<div class="container add_new_events">
    <h1 class="text-center m-2">Add New Events</h1>
    <div class="event">
     <form>
       <div class="row">
       <div class="form-row">
         <div class="col-md-12"> 
            <div class="col-md-10 mb-3">
              <label for="title">Event Title</label>
                <input type="text" name="title" class="form-control" id="title">
            </div>

            <div class="col-md-10 mb-3">
              <label for="desc">Event Description</label>
                <textarea name="desc" id="desc" class="form-control" cols="" rows=""></textarea>
            </div>

            <div class="col-md-10                 ">
              <label for="event-pt ">Event Point</label>
                  <input type="text" name="event-pt" class="form-control" id="event-pt">
            </div>

            <div class="col-md-10 d-flex mt-3 mb-5">

             <div class="col-md-6 ">
              <label for="event-pt">Event url</label> 
                 <input type="text" name="event-pt" class="form-control" id="event-pt">
            </div>

              <div class="col-md-6">
              <label for="event-pt">Event Host</label>
                  <input type="text" name="event-host" class="form-control" id="event-host">
              </div>
          </div>
       </div>
       </div>

      <div class="form-row ">
        <div class="col-md-12">
        <div class=" category mb-3">
          <h3 class="text-center">category</h3>
         <div class="custom-control">
           <input type="checkbox" class="custom-control-input" id="defaultUnchecked">
           <label for="defaultUnchecked" class="custom-control-label">category one</label>
         </div>
         <div class="custom-control custom-checkbox">
           <input type="checkbox" class="custom-control-input" id="defaultUnchecked">
           <label for="defaultUnchecked" class="custom-control-label">category two</label>
         </div>
         <div class="custom-control custom-checkbox">
           <input type="checkbox" class="custom-control-input" id="defaultUnchecked">
           <label for="defaultUnchecked" class="custom-control-label">category one</label>
         </div>
         <div class="custom-control custom-checkbox">
           <input type="checkbox" class="custom-control-input" id="defaultUnchecked">
           <label for="defaultUnchecked" class="custom-control-label">category one</label>
         </div>
       </div>
       <div class="upload">
          <div class="form-group">
            <input type="file" name="file_upload" id="file-upload">
         </div>
       </div>
       <div class="button_publish col-md-12">
          <a href="">Save</a>
          <a href="">Publish</a>
      
       </div>
      </div>
      </div>
      </div>
    </form>
  
</div>
  </div>
</template>

<script>
export default {
  name: 'add_new_events',
}
</script>


<style scoped lang="scss">
.add_new_events {
  h1{
}
        .event {
          padding-bottom: 20px;
          }  
       .upload {
          border: 1px solid #5eedde;
          margin-top: 20px;
          margin-bottom: 10px;
          padding: 10px;
          border-radius: 5%;
          }
        .button_publish {
          border: 1px solid #5eedde;
          margin-top: 40px;
          }
        a {
          font-size: 16px;
          margin: 1.5em;
          justify-content: center;
        }  
          a:first-child {
          background: orange;
          color: white;
         }  
         .category {
           border: 1px solid #000;
           text-align: center;
           line-height: 1.5px;
         }                                                                  
      }

</style>
                                                            