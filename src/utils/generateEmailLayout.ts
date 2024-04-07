import { WaveResponse } from '../services/AdaCompilanceService/types';

export const generateEmailLayout = (data: WaveResponse) => {
  const { statistics, categories } = data;

  return `<html lang="en">
<head>
    <style>

        body {
            max-width: 100%;
            font-family: "Open Sans";
            background: url("https://api.adacompliancepros.com/assets/bg2.png") no-repeat left bottom;
        }

        .bg {
            background-image: url("https://api.adacompliancepros.com/assets/ADA-website-Compliance-Pros-Web-Banner-bg.webp");
        }

        h1 {
            color: #FFFFFF;
            font-family: Open Sans, sans-serif;
            font-size: 44px;
            text-align: center;
        }

        h2, h3, h4, h5, p {
            font-family: Open Sans, sans-serif;
        }

        h2 {
            font-size: 26px;
        }

        h3 {
            font-size: 20px;
        }

        p {
            font-size: 16px;
        }

        .flex-container {
            display:flex;
            flex-direction: row;
        }

        a {
            color: white;
            font-size: 18px;
        }

        .flex-left {
            width: 55%;
            height: 100%;
            margin: 5px;
            padding: 120px 20px;
            align-self: center;
            text-align-last: center;
            place-self: center;
            text-align: -webkit-center;
        }

        .flex-right {
            width: 45%;
            margin: 5px;
            align-self: center;
            text-align-last: center;
            place-self: center;
            text-align: -webkit-center;
        }

        .flex-right p {
            color: #fffff;
            font-family: "Open Sans", sans-serif;
        }
        
        .flex-right a {
            color: #fffff !important;
            font-family: "Open Sans", sans-serif;
            font-size: 18px;
        }

        .email {
            margin-bottom: 25px;
            border-top: 1px solid #789b4a;
            border-bottom: 1px solid #789b4a;
            border-right: 1px solid #789b4a;
            border-radius: 20px;
            width: 100%;
            max-width: 500px;
        }

        .email-1 {
            font-size: 40px;
            color: #c3db6e;
            padding: 2px 20px 2px 0;
        }

        .email-2{
            align-self: center;
            padding: 6% 0;
        }

        .email-3{
            align-self: center;
            padding: 2% 0;
        }

        .mobile {
            display: none;
        }

        @media screen and (max-width: 600px)  {
            .desktop {
                display:none!important;
            }

            .mobile {
                display: block!important;
            }

            h3 {
                font-size: 16px!important;
            }
            
            mobile-a a {
                color: #ff2400!important;
                font-family: "Open Sans", sans-serif;
            }
        }
        
        .url {
            font-size: 18px!important;
            color: white; 
            font-weight: 600;
        }


    </style>
</head>
<body>
<header>
    <div class="flex-container bg desktop">
        <div class="flex-left">
            <h1>Your Journey to Digital
                Accessibility starts here</h1>
        </div>
        <div class="flex-right" style="background: #0000004f">
            <p class = "url">${statistics.pageurl}</p>
            <br>
            <img src="https://api.adacompliancepros.com/assets/results1.png">
            <div class="flex-container">
                <div style="width: 50%; padding: 0 15px;">
                    <p style="text-align: -webkit-center; color: #ffffff; font-weight: 600; margin: 0;">Accessible Website</p></div>
                <div style="width: 50%; padding: 0 15px;">${Object.entries(
                  categories
                )
                  .map(
                    ([key, value]) =>
                      `<p style="text-align: -webkit-center; color: #ffffff; font-weight: 600; margin: 0;">${value.description}: ${value.count}</p>`
                  )
                  .join('')}</div>
            </div>
        </div>
    </div>
    <div class = "mobile bg">
        <div style="padding: 30px 20px; align-self: center; text-align-last: center;">
            <h1>Your Journey to Digital
                Accessibility Starts Here</h1>
        </div>
        <div class ="mobile-a" style="padding: 30px 20px; background: #ffffff00; align-self: center; text-align-last: center;">
            <p class = "url">${statistics.pageurl}</p>
            <img src="https://api.adacompliancepros.com/assets/results1.png">
            <div style="display: table; padding: 5px 0px;">
                <div style="display: table-cell; padding: 5px 0px 5px 0px;">
            <p style="text-align: -webkit-center; color: #ffffff; font-weight: 600">Accessible Website</p></div>
                <div style="display: table-cell; padding: 5px 0px 0 75px;">${Object.entries(
                  categories
                )
                  .map(
                    ([key, value]) =>
                      `<p style="text-align: -webkit-center; color: #ffffff; font-weight: 600; margin: 0;">${value.description}: ${value.count}</p>`
                  )
                  .join('')}</div>
                </div>
        </div>
    </div>
</header>
<div style="padding: 30px 40px 10px 40px">
    <div class="flex-container email">
        <div class="width: 35%;"><h2 class="email-1">1</h2></div>
        <div><h2 class="email-2">Review Your Website Score</h2></div></div>
    <p>Above you will find your requested score. It is a snapshot to give you an understanding of how accessible your
        website currently is. This score is just the tip of the iceberg. We have mountains of additional info available and plan to share it with you.</p>
</div>
<div style="padding: 30px 40px 10px 40px">
    <div class="flex-container email">
        <div class="width: 35%;"><h2 class="email-1">2</h2></div>
        <div><h2 class="email-3">Review This Accessibility User Guide</h2></div></div>
    <p>Included in this email is our detailed Accessibility User Guide. It will provide you a good baseline understanding
        of requirements, risks and options, including the chance to better understand the test results.</p>
</div>
<div style="padding: 30px 40px 10px 40px">
    <div class="flex-container email">
        <div class="width: 35%;"><h2 class="email-1">3</h2></div>
        <div><h2 class="email-3">Let Us Answer Your Questions and Give Detailed Results</h2></div></div>
    <p>You are now ready to have an in-depth consultation to review the specific findings of your website test. In our provided 30-minute consultation, we will share the accessibility errors and warnings your website currently has.  We will roll up our sleeves and get into the best possible solutions to protect you from lawsuits and get your website accessible for all.</p>
</div>
<div style="background: #07569a; padding: 20px 0">
    <h3 style="text-transform: uppercase; text-align: center; color: white"><a href="https://calendly.com/adacp/30min" style="color: white">SCHEDULE A 30 MINUTE CONSULTATION TO REVIEW YOUR FINDINGS IN DETAIL
        AND DISCUSS THE NEXT STEPS</a></h3>
</div>


</div>
</body>
</html>`;
};
