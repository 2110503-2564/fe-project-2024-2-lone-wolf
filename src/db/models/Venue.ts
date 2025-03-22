const mongoose = require("mongoose");

  const VenueSchema = new mongoose.Schema(
    {
      address: {
        type: String,
        required: true,
      },
      district: {
        type: String,
        required: true,
      },
      province: {
        type: String,
        required: true,
      },
      postalcode: {
        type: String,
        required: true,
      },
      tel: {
        type: String,
        required: true,
      },
      picture: {
        type: String,
        required: false,
      },
      dailyrate: {
        type: Number,
        required: true,
      },
    },
    {
      toJSON: { virtuals: true },
      toObject: { virtuals: true },
    }
  );

const Venue = mongoose.models.Venue || mongoose.model("Venue", VenueSchema)
export default Venue