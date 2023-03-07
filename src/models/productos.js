const mongoose = require('mongoose')

const productoSchema = mongoose.Schema({
  precio: {
    type: Number,
    required: true
  },
  variedad: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Variedad'
  },
  presentacion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Presentacion'
  }
});

module.exports = mongoose.model('Producto', productoSchema);
