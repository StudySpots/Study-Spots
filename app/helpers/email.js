const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true, // secure:true for port 465, secure:false for port 587
	auth: {
	    user: 'UFStudySpotsService@gmail.com',
	    pass: 'YataYata44!'
	}
});

const emailTemplate = `
	<BODY>

		      <P align=center style="font-size:25px;color:rgb(104, 145, 162);">Study Spot</P>

		<DIV align=center>

		      <TABLE style="HEIGHT: 10px; MARGIN-LEFT: auto; WIDTH: 600px; BACKGROUND-COLOR: rgb(104, 145, 162); MARGIN-RIGHT: auto" align=center>

		            <TBODY>

		                  <TR>

		                        <TD>&nbsp;</TD>

		                  </TR>

		            </TBODY>

		      </TABLE>

		</DIV>

		<!--HEADER/BANNER END-->

		<!--CONTENT OF BODY START-->

		<DIV align=center>

		      <TABLE style="MARGIN-LEFT: auto; WIDTH: 600px; MARGIN-RIGHT: auto" cellSpacing=0 cellPadding=0 align=center>

		            <TBODY>

		                  <TR>

		                        <TD style="HEIGHT: 450px; PADDING-BOTTOM: 10px; TEXT-ALIGN: left; PADDING-TOP: 75px; PADDING-LEFT: 20px; PADDING-RIGHT: 20px; WIDTH: 600px; BACKGROUND-COLOR: #fcfcfc" vAlign=top>Hi Dear,<BR><BR><BR>Thankyou for signing up for Study Spot. <BR><BR><BR>Please click {{VERIFY_LINK}} to verify your email. <BR><BR><BR><BR><BR><BR><BR><BR><BR>
		                        </TD>

		                  </TR>

		<TR>

		      <TD style="HEIGHT: 175px; TEXT-ALIGN: center; MARGIN-TOP: 25px; BACKGROUND-COLOR: #2a2a2a">

		            <SPAN style="COLOR: #c3c3c3"><A style="TEXT-DECORATION: none" href="http://www.studyspot.com">

		            <SPAN style="COLOR: #c3c3c3"><U>www.studyspot.com</U></SPAN></A><BR><BR> is a place to find study spots.</SPAN>

		                  <BR style="COLOR: #c3c3c3">

		            <SPAN style="COLOR: #c3c3c3">1600 Pennsylvania Ave NW<BR>Washington, DC 20500<BR><BR></SPAN>

		            <SPAN><A href="https://www.facebook.com/YourFaceBookPage"><IMG style="BORDER-LEFT-WIDTH: 0px; BORDER-RIGHT-WIDTH: 0px; BORDER-BOTTOM-WIDTH: 0px; BORDER-TOP-WIDTH: 0px; MARGIN-RIGHT: 5px; opacity: 0.9" alt=Facebook src="http://trailblz.info/license/images/fb-35x35-pixels.png" width=35 longDesc="Facebook - Campaign to Elect Juan Pablo" height=35></A></SPAN>

		            <SPAN><A href="https://www.twitter.com/YourTwitterPage"><IMG style="BORDER-LEFT-WIDTH: 0px; BORDER-RIGHT-WIDTH: 0px; BORDER-BOTTOM-WIDTH: 0px; MARGIN-LEFT: 5px; BORDER-TOP-WIDTH: 0px; opacity: 0.9" alt=Twitter src="http://trailblz.info/license/images/twitter-35x35-pixels.png" width=35 longDesc="Twitter - Campaign to Elect Juan Pablo" height=35></A></SPAN>

		      </TD>

		</TR>

		<!--FOOTER END-->

		</TBODY>

		</TABLE>

		</DIV>

	</BODY>
`;

module.exports = {
	sendVerifcationEmail: function(user, callback){
		let emailContent = emailTemplate.replace("{{VERIFY_LINK}}", 
			"http://localhost:8080/api/verify_email?token="+user.token
		);

		let mailOptions = {
			from: 'UFStudySpotsService@gmail.com',
			to: user.email,
			subject: 'Email Verification',
			html: emailContent,
		};
		transporter.sendMail(mailOptions, (err, info) => {
			if(err){
				callback(err, null);
			}
			callback(null, true);
		});
	}
}