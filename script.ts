//Listing Element
document.getElementById('resumeForm')?.addEventListener('submit', function(event){
    event.preventDefault();


    //Type Assertion     
    const profilePictureInput =document.getElementById('profilePicture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const contactElement = document.getElementById('contact') as HTMLInputElement;    
    const addressElement = document.getElementById('address') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;
const usernameElement = document.getElementById("username") as HTMLInputElement;

if (profilePictureInput && nameElement && emailElement 
  && contactElement && addressElement && educationElement && experienceElement 
  && skillsElement && usernameElement) {

const name = nameElement.value;
const email = emailElement.value;
const contact = contactElement.value;
const address = addressElement.value;
const education = educationElement.value;
const experience = experienceElement.value;
const skills = skillsElement.value;

const username = usernameElement.value;
const uniquePath = `resume/${username.replace(/\s+/g, '_')}_cv.html`

//Picture Elements
const profilePictureFile = profilePictureInput.files?.[0]
const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';


    const resumeOutput = `
    <h2>Resume<h2/>
    ${profilePictureURL? `<img src="${profilePictureURL}"alt="profile picture" class="profilePicture">`: '' } 

    <p><strong>Name:</strong> <span id="edit-name" class="editable">${name}</span></p>    
    <p><strong>Email:</strong><span id="edit-email" class="editable">${email}</span></p>
    <p><strong>Contact:</strong><span id="edit-contact" class="editable">${contact}</span></p>
    <p><strong>Address:</strong><span id="edit-address" class="editable">${address}</span></p>

    <h3>Education<h3/>
    <p id="edit-education" class="editable">${education}</p>
    <h3>Experience<h3/>
    <p id="edit-experience" class="editable">${experience}</p>
    <h3>Skills<h3/>
    <p id="edit-skills" class="editable">${skills}</p>
    `;

    const downloadLink = document.createElement('a')
    downloadLink.href = 'data:text/html;charset=utf-8,'+ encodeURIComponent(resumeOutput)
    downloadLink.download = uniquePath;
    downloadLink.textContent = 'Download Your 2024 Resume'




    //ResumeOutput
   const resumeOutputElement = document.getElementById('resumeOutput')
   if (resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput
    resumeOutputElement.classList.remove("hidden")

    //create for buttons
    const buttonContainer = document.createElement("div");
    buttonContainer.id= "buttonContainer";
    resumeOutputElement.appendChild(buttonContainer);

    //Add Download pdf button

    const downloadButton =document.createElement("button");
    downloadButton.textContent = "Download as PDF";
    downloadButton.addEventListener("click", async () => {
      window.print();
    });
    buttonContainer.appendChild(downloadButton);

    const shareLinkButton = document.createElement("button");
    shareLinkButton.textContent = "Copy Shareable Link";
    shareLinkButton.addEventListener("click", async () => {
      try{
        const shareableLink = `https://yourdomain.com/resume/${name.replace(
          /\s+/g, '_'
        )}_cv.html`;

    //Sharelable Link

    await navigator.clipboard.writeText(shareableLink);
      alert("Shareable link copied to clipboard!");
      } catch (error) {
        console.error("Failled to copy link:", error);
        alert("Failled to copy link to clipboard. Please try again.");
      }
    });
    buttonContainer.appendChild(shareLinkButton);
   } else {
    console.error("Resume output  container not found");
   }
   } else {
    console.error("Form elemenets are missing");
   }
   } );