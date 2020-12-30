const FilePicker = () => new Promise((resolve) => {

  // Creating a <input />
  const file = document.createElement("input");

  // Event listener function for input
  const chooseFile = (ev: Event) => {

    // Picking file from the target
    let files = (ev.target as typeof file).files;

    // Checking the file null or not
    if (files) {

      // resolve the result
      resolve(files[0]);
    }

  }

  // Give the input type 'file'
  file.type = "file";

  // It only accept .jpg, .jpeg, .png formats
  file.accept = ".jpg, .jpeg, .png";

  // Add event listener
  file.onchange = chooseFile;

  // Click...
  file.click();

});

export default FilePicker;
