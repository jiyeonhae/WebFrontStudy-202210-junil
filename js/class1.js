// let user = {
//     username: "junil",
//     password: "1234"
// };

class User {
    username;
    password;
    name;
    email;
}

class UserMain {

    main() {
        let user = new User();

        user.username = "junil";
        user.password = "1234";
        user.name = "김준일";
        user.email = "skjil1218@gmail.com";

        console.log(user);
    }   

}

window.onload = () => {
    let userMain = new UserMain();

    userMain.main();
}