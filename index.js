import themeSwitcher from "./js-modules/theme.js"
import loadingAnimation from "./js-modules/loader.js"
import formValidation from "./js-modules/form-validation.js"

themeSwitcher()
loadingAnimation()

const demo = document.getElementById("demo")
if (demo) {
  formValidation()
}
