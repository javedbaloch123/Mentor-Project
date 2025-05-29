<script setup>
    
     import { defineProps } from 'vue';

    const prop= defineProps({
        price: String,
        name: String
     })
</script>

<template>
    <div class="container mt-5">
  <div class="row justify-content-center">
    <div class="col-md-8 col-lg-6">
      <div class="card shadow-lg">
        <div class="card-header bg-primary text-white text-center">
          <h4>Payment Information</h4>
        </div>
        <div class="card-body">
          <form>
      
            <div class="mb-3">
              <label for="phone" class="form-label">Account Number</label>
              <input type="text" class="form-control" id="phone" placeholder="03XX-XXXXXXX">
            </div>
            <div class="mb-3">
              <label for="courseName" class="form-label">Course Name</label>
              <input type="text" class="form-control" id="courseName" :value="prop.name" disabled>
            </div>

            <div class="mb-3">
              <label for="amount" class="form-label">Amount (PKR)</label>
              <input type="text" disabled :value="prop.price" class="form-control" id="amount">
            </div>

            <div class="mb-3">
              <label for="paymentMethod" class="form-label">Payment Method</label>
              <select class="form-select" id="paymentMethod">
                <option selected disabled>Select payment method</option>
                <option value="jazzcash">JazzCash</option>
                <option value="easypaisa">EasyPaisa</option>
                <option value="bank">Bank Transfer</option>
              </select>
            </div>

            <div class="d-grid">
              <button type="submit" class="btn btn-success">Proceed to Pay</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

</template>