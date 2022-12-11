const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/uploads/");
    },
    filename: function (req, file, cb) {
        newFileName = new Date().toISOString().replace(/:/g, '-') + file.originalname;
        cb(null, newFileName);
    },
    fileFilter: function (req, file, cb) {

    }
});

const upload = multer({
    storage: storage
});

const multipleUpload = upload.fields([{
    name: "cnicFront"
}, {
    name: "cnicBack"
}, {
    name: "licenseFront"
}, {
    name: "licenseBack"
}, {
    name: "numberPlate"
}, {
    name: "registrationDoc"
}])

module.exports = {
    upload,
    multipleUpload
}