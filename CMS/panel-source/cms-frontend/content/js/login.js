const $ = document;
const usernameInput = $.querySelector("#username-input");
const passwordInput = $.querySelector("#password-input");
const adminLoginBtn = $.querySelector(".submit-form-btn");

adminLoginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let adminUserName = usernameInput.value;
  let adminPassword = passwordInput.value;

  fetch("http://localhost:3000/api/admins")
    .then((res) => res.json())
    .then((admins) => {
      console.log(admins);

      let isAdmin = admins.some((admin) => {
        return (
          admin.userName === adminUserName && admin.password === adminPassword
        );
      });
      console.log(isAdmin);
    });
});
