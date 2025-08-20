// controller/reservation.js
export const createReservation = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, date, time } = req.body;

    // basic validation
    if (!firstName || !lastName || !email || !phone || !date || !time) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // TODO: save reservation in database (MongoDB/MySQL/etc.)
    // Example (if you use MongoDB + Mongoose):
    // const reservation = await Reservation.create({ firstName, lastName, email, phone, date, time });

    console.log("✅ Reservation received:", {
      firstName,
      lastName,
      email,
      phone,
      date,
      time,
    });

    return res.status(201).json({
      message: "Reservation successful! 🎉",
      // reservation, // include if saving in DB
    });
  } catch (error) {
    console.error("❌ Error creating reservation:", error);
    return res.status(500).json({ message: "Server error, please try again later" });
  }
};
