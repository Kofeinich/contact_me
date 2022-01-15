import React from "react";
import Title from "./Title";
import TelegramIcon from "./TelegramIcon";
import InstagramIcon from "./InstagramIcon";
import GitHubIcon from "./GitHubIcon";
import Dashboard from "./Dashboard";

function Page(){
    return <>
        <Title primary children="Kofeinich"/>
        <TelegramIcon/>
        <GitHubIcon/>
        <InstagramIcon/>
    </>

}

export default Page