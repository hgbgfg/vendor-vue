<template>
	<div class="distribution">
		<div class="topTitle">		
			<router-link to="/manageOrder/1"><img src="../assets/image/ic_nav_backarrow.png"></router-link>
			发货
			<a href="tel://4000309755" class="customServer">联系客服</a>
		</div>
		<div class="orderInfo">
			<div class="top">
				<p>订单编号：</p>
				<p>接单时间：&nbsp;&nbsp;<span>2016.12.20 16:43:00</span><span>待发货</span></p>
			</div>
			<div class="middle">					
				<img src="../assets/image/20170623105610.jpg" class="left">
				<div class="right">
					<p>张惠妹“乌托邦2.0庆典”世界巡回演唱会</p>
					<div>							
						<p>2017/09/18  周三  19:30</p>
						<p>深圳  华润深圳湾体育中心</p>
						<p>票档  ￥380</p>
					</div>
				</div>
				<span>￥450</span>
				<span>x2</span>
			</div>
			<div class="bottom">
				<p>合计：<span>￥</span><span>900</span></p>
			</div>
		</div>
		<div class="venderAddress">
			<div class="left">收货信息</div>
			<div class="right">
				<p>
					联系人： <span>张亮亮</span>&nbsp;&nbsp;&nbsp;
					电话： <span>13718247356</span>
				</p>
				<textarea disabled="">北京市海淀区北四环西路辅路中国技术交易大厦A座1818</textarea>
			</div>
		</div>
		<ul class="logisticsInfo">
			<li>物流公司 <input type="text" name="" placeholder="请选择物流公司" v-model="items.expressName" ref="name"><img src="../assets/image/ic_arrow_right@2x.png"></li>
			<li>物流单号 <input type="text" name="" placeholder="请输入物流单号" v-model="items.expressNum" ref="num"></li>
			<li>
				<p>上传照片</p>
				<p class="expressSingle">
					<img :src="expressSingle">
				</p>
				<input type="file" accept="image/*" id="imgUpload" @click="updateImg">
			</li>
		</ul>
		<div v-if="activeConfirm">
			<router-link to="/manageOrder/2"><p class="confirmBtn" style="background: #FCE76C;color: #2d2d2d;">确认发货</p></router-link>
		</div>
		<div v-else>
			<p class="confirmBtn">确认发货</p>
		</div>
	</div>
</template>

<style type="text/css" scoped>
	@import "../../static/css/distribution.css"
</style>

<script type="text/javascript">
	import $ from "jquery"
	export default {
		name: "distribution",
		data(){
			return {
				activeConfirm: false,
				items: {
					expressName: "",
					expressNum: ""
				},
				expressSingle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaIAAADWCAYAAACTz4YMAAAAAXNSR0IArs4c6QAAI7BJREFUeAHtnfe3JEXZgHsvC2xgYQEBs2DAhKiAoh7TLx498gN/rh71KAYUdc0RMWACQVaSbECW/eZpePerre0403Nv1/RT59w7012hq57qqbfet9KhU6dOXaxGuHvvvfey0D/5yU8uu9ZfPukL4fvh7yN9H2wfltE+5L/79B1o+n5oU0HUlKj3JCABCUhguQTGCqLDgSrvqcR9PyUgAQlIQAJjCAyVJyGw9sYkblgJSEACEpDA1AQURFMTNT0JSEACEhhFQEE0CpeBJSABCUhgagIKoqmJmp4EJCABCYwioCAahcvAEpCABCQwNQEF0dRETU8CEpCABEYRUBCNwmVgCUhAAhKYmoCCaGqipicBCUhAAqMIKIhG4TKwBCQgAQlMTaDeWWHoKtipH256EpCABCSwXAIhe9SIlvsOWHIJSEACsyBwaa+5WeQmycSZM2eqq666Krmz2deLFy9W/O3tKXs3I2lsCUigZAIXLlyojh07NpsisN/cbAURQujaa6+dDNYrr7xSUQFTpjlZ5kxIAhKQwD4ROH/+/D49afhj9sJGNzyKISUgAQlIQALTEdBONR1LU5KABCQggTUIHFqNm4w6oXWNZ6wVBfVxSjOaprm1qsFIEpDAjhGYum2dAo8a0RQUTUMCEpCABNYmsBcn5K2dQiERDx8+PKmGVUixzaYEJCCB2RNQI5p9FZlBCUhAArtNQEG02/Vr6SQgAQnMmgBWOQXRrKvIzElAAhLYfQKHS11HFDslUEXulrD7L6ollIAEdpfAbHdWaEP+6quvVv/73//qXRIizKFDhyomI1x99dVxy08JSEACEiiEQFHriNiip2t7iq5tgVxHVMgbaTYlIIGtEnAd0QZ4McW9/PLLnSkgqNCWdBKQgAQkUA6BYtYRodEM2QSCcDoJSEACEiiHQDFjRIwNDXExiYFxI908CZw+fbqifm666abqySefrE6cOFEdOXKkevrpp+uxvmuuuaY6efJk9cQTT9SfsWX9U089VYe7/vrr63g33nhjPVGF9Jiwcvz48Xp7e8LdfPPNdVpo0UePHq1B0EnhGZhwed4NN9xQP4N8kB/Sue222yY9fiStAd7hPq0+Db9L39muK/1N5uO8u1TW/SgL7zu/k11xxQiiIdpQVAph05c+7m/6SUOSCkQatG08Z9N8zj0+jVBwSxskvqd1l/pRphjnIwx+1EV854eJaRaX+kUYnsf3eEZo2Fzznbrk+7Zd+v5s+1lzTh8OsphzDe1f3mZ9HlGOIRqu/H7T9ZiwTfHzezRQ0YDlfjwrZuyNfW7a6ObpHsT13PJzEAx8pgQksP8EillHRGMfPd4uTG1aCvH5G+NomM+ePds5NhU9cnrVmICGCiPicQrt3BwmKxjqJCABCewXgWJ2VqBxHNJAjhU2baCHCKE0bggWzQ0pFb9LQAIS6CdQjCCiKAzOdQkjBkS7/PtxvBYCoXLu3LlOTagtLeLpJCABCUhgGAF29xlnqxqW7tZCYfZC2KSD1jwM4YMmNNQs1pdBxoPW1WwQYsyM2qUZLX289JeABCSwCYHDzFgobb+5dcZ7xkDadPYU8fsEEUKTackIrrm4qQT5XMpjPiQggTIIFKUR7QfSdTWhPG9MrOgzE9Lw2/jn5LyWgASWRqCoMaJNKgdzXtc+dZH2VIJoqnQiX35KQAIS2EUCnkfUUKtTCZA5mdwaiuktCUhAArMhUMw6ov0itl+mspiZt1/liufEdjdx7acEJCCBgybgGFFWA1Mdsjcknam0r6wIXkpAAhIoisBixoiG1krfBIMh6aDtTLWwdsjzDCMBCUigVALM2i5WEKFNMDNtG1rFpkLEk2JL/UmYbwlI4CAIFLeOCOHDgtF8MgCNf9ei1jFrj1gDxHPyZwytoL41RKTDWBSLc5foOMYhTJcc5QAHruNYh+gIcJ2OaXE0BH4Rln3xqCPCwRPu4cf7wHfSjnE/4qbP4D7XpIMLvyXWiWWWwEESKGqMiCnYbee5xG4INEbR8KwLlvg0YGx4OjYtGrWhcaLBXTefpcaL84XIP2cRhUNApS6/5ryhcKlf+h3/9BphFI7vqV8eNveLeH5KQALbJfD/v9LtPmfj1On5tgmhSBwtBmE1hWOsaMxu2jzTnaunIG8aEpDAkggUtY5oqIDZdHue9AUIYYSZp81Mx300G3r5U0x0SJ/vdwlIQAJLIFDMOqIxkxIIm5pkNqlIzGyY+xBG+eQInrFU89omTI0rAQlIICVQzBhRm0aSFia+jwkbcfo+EUgKnT5K+ktAAhIYT6CYMaKhEwBA0KQNDd1rbjxCY0hAAhKQwLoEijqPCG0E01ifY5xmjNDqS09/CUxFgPdyqVP2899kLLeYiq3plE2gmHVECBj+uoQRL/uQNTxlV5m5L5UA76cTWl6rvSarRan1ar43J1CMaY6i0pts+yFHbzPveW2OyBQkIAEJSGCbBIqZrBAQEEbp9j4IHmevBR0/JSABCZRFgHVExQkiECN4VO3LetnMrQQkIIE2AsWsI2orwND7THZonX69Wnd05rnnupN6fT+y7kD6LpkA71fXGOXF1WSbV8+d60S0t1oYrZNAF4FdHH4oUiPqqqR1/C48/3x15NFHO6Oeu+uuajVA1RlGTwl0Ebjw7LPV3mOPdQWpzt59NzvidobRc9kE6Oy0dqoLRVPUZIVCGZttCUhAAhJoIVD0eUQtZfK2BCQgAQkURmCPGQs6CUhAAhKQwEER0DR3UOR9rgQkIAEJ1ASKFUSsJeLIB3ZaGLLJqXvN+cZLQAISmB+BItcRIVCaDshjxwVmk+zi1Mb5vTrmSAISkMB0BIpaR4QG1HbwHZrR+fPn61NSp8NjShK4ksDp06erRx555AqPBx988Ip73pCABPoJFLOOCPNbmxCKYmKuQ1vqWlQYYS/7vO666oU77rjsVn5xzWo3B50ENiFw8cSJ/vfMNUSbIDZuoQSKEUR9Qij4Y7obLYhWQubC6gTWTmcD0YlHz34CF1fvUO971p+MISSwUwSKWkeEtjPUjQk7NE3DSUACEpDAdggsZh0RW2Is9VCy7bw6pioBCUhgGgLFDHyMmQ03Juw0GE1FAhKQgATWJVCMIOJo4SGOadwKoiGkDCMBCUjg4AmwjqgYQcT5Q22nswZKBNDoiQoR2U8JSEACEjgQAnvMWCjFMcbTphkhqI6szgxSGyqlNs2nBCQggdcIFDN9OyoMQcTEAxawMjsOwYOm5ImtQchPCUhAAmURKE4QgRfhM/ZgKNYXIbycOVfWC2puJSCB3SZQ1Dqi3a4KSycBCUhguQQWs45ouVVsySUgAQnMm0Axs+bmjdHcSUACEpDAugQUROuSM54EJCABCWxMoMjziDYutQlIYEWAoxzWdS+88EJj1GeeeaZ1eQER2Lj3zJkzjXGZfHNitTu3TgJLJFDUeUSbVBA/9LEz7TZ5nnHnTaDpPKFNc/zwww+vncTJkyere+65Z+34RpRAyQSKnL7N2UTpEeFDdl0ouZLMuwQkIIFdJlCcIMK80XQ2EcKINULurLDLr6tlk4AEdo1AceuIOH21SQhRMeyycO7cuQptSScBCUhAAuUQKGYdEYKG3RG63JDjxLvi6ycBCUhAAvtPoBjTXJsmlCNb66jwPBGvd57AAw88sHYZmXHXNNnhwQcf7Nz9HY3+xRdfXPu5RpTArhIoZh3RGJNb01HhCKjz58/vaj1aLglIQAJFEijqPKIiCZtpCUhAAhLoJVDMeURjjnkYE7aXkAEkIAEJSGCrBIoxzQ1djNp3iutWaZq4BCQgAQmMJlCMIELLaTudNUrNGiKPCg8afkpAAhKYPwHWERUzaw6cCCKEDTPo8skLaEIIIRe0zv/FM4cSkIAEUgLFrCOKTGOiO3LkSC10EEwIn6NHj/buqkA8T2cNin5KQAISmA+BojSiwIbWM3TMKOL4KQEJSEAC8yRQzBjRPPGZKwlIQAIS2ISA64g2oWdcCUhAAhKYhMBiziPqo9U3fnTs2LG+JPRfCIGXXnqpsaTO2GzE4k0J9BLQNNeLyAASkIAEJLBNAosRRO41t83XyLQlIAEJrEeguHVE6xWzP9ahCxeqq3p2Rb54/LhrlPpRGkICEpDAaAKHmbGARCrJsbt2flT4JtO5L65s/tc+/ng3gltuqVZzxrvD6LsIAqxfu4X3QScBCUxCoLiWlaMcEEK5Y7cFJhyss+Epgu2qPMHs+tzZswqijMlSL3nP7r///iuKj/l3kw7RFQl6QwILIVCUIGoTQtQVW/5wVDi7LIzd5mdI+PoAco8hX8jPwmJKQAL7RaCodURoQU2aUA6LUzB1EpCABCRQDoFi1hENEUJgJxzaUa7lYDLRbFLOi2lOJSCB5RAoZvp20/HfbdU0JmxbGt6XgAQkIIH9IVCMIBqDI9eGxsQ1rAQkIAEJ7B8BZm0XI4iGnryKEFpn5tz+YfdJEpCABCSQEihmHRGCiCnafW6dcaCLJ05Uz955Z2fSR1fP10lAAhKQwPQEitGI0HL6NpUccpz49AhNUQISkIAENiFQjCCikGg7bceBozFxcmubc6+5NjLel4AEJHBwBFhHVNSCVlDFNGxmxjFNG4cm5ASFGoX/JCABCRRHoJh1RDlZJyTkRLyWgAQkUCaBokxzZSI21xKQgAQk0EWgONNcV2H0k8CsCaxMyXsNG/bOOs9mTgJbJuB5RFsGbPISSAnsrc68uuFPf0pvXfH93N13V6sBzyvue0MCu0xgjxkLS3BMcmD7fp0EJCABCcyLgGNE86oPcyMBCUhgcQQURIurcgssAQlIYD4EilxHBD7WELHdTxz3wGJW/lxLNJ+Xy5xIQAISGEpgjxkLJTlOaeUkVs4dQiDxyWF4Z1dHeQ89s6ik8m47rzD7z3/+U73wwguTPopOQtchhfg/99xzdV2u+2B2yyAN6r7JvfTSS023t3Lv+eefr/74xz9OxrGtTGnmqTcYlO54TyjLkDKXXlbz30ygKNNcCKDmolQVQsqziNroNN+nsf7BD35Q/fa3v20OsObdJ598svrmN79ZPf74440pIEAefvjh6ve//32j/5CbL65moZEGAiB3//3vf6uHHnqo+ulPf5p7DbqmUfzZz35Wv1NDIpCXX/3qV9Vjjz02JHhnmB/96EfVt7/97YoytLkzZ85UjzzySF3GIR0wfhsIy7Y/noNAaPNvus/vsc9R/3/4wx86f5cIId7Bv/3tb33J6b+jBIpZR8SPbYiQ4cfUtOccPUfScObc/rzJf/nLX2rebRvV0vjgbrrpplEZogFGeN54442d8f7973/X/idWO6uv4x599NHqiSeeqJ599tnqvvvuq66//vrOZN785jfXQvXvf/979ZGPfKQ2FXdG6PC8/fbbK/KPEP30pz/deKwJ+UOrfNe73jXoWf/85z+r3/3ud61PfeCBB6p//etftTBtDZR5vPvd767e+973Zncvv/zrX/9aC9Q77rijsRyXh/ZqiQSKWkc01ASBsIqxoyVW6hzKjLbDHx2CN73pTY1ZCkF08uTJRv+2mwgHGmEa6C4XgugNb3hDV7BWvw9/+MPV0aNHa22L3jrC5bbbbqv+tFoHhDBscldffXXd6KKpEDd3F1adobe/8Y3VkY5lBFev1hDdeuut1Tvf+c7qz3/+c/Wb3/ym+tCHPnRZUphR4XDddddVCK0x7o2r56dCFS0kNBvu89xwPAM/hEg6/oqm9vTTT9f7PkZYPyWwCYFiziNCuAx1CCMmL+gOhgDaEC4asO985ztXmLhi/OiHP/xhayYRZJ/5zGcu849GE822bUwBzff06dN1D/z48eODxlHyc6xoeOnt33DDDbVmwsyez372s7XWgJDtcjTgbe7WlTA7nAki3u0Yz7r29bE6NCyENRpdPn4X5sy3ve1tFSbB1BE+FRqpH98Rpm9961sv3UagBFM6BdExgCHaDPw+8IEPXArPF4SXgugyJF5sSKAY01zXjytnMCZsHtfrzQjQqDE+RMP+9re/vU6M+kjrJEys68x0jEazSxDRgMczvv71r/cWiLx+8YtfbAyHBvGxj32sbqzRQPgeaROB8SkabIQW2kQu0FLtHOEbAjh9GNo+40JNrkvoNZnavvCFL/Se29X0nPwe2hjCiPLnLsqABqiTwBQEihFE7LbND2OIc2fuIZS2EwbTFY0vvfVolHOtBo2JyRH0tENYDc1NaEFMUghzLWMbDKajDWBSoxHFoc3wLjDOw1gVvXum/WNa4jv3iNfnbrnllktB0jEv4qIdYNJirAbhGGUmnz/+8Y9rEx3CC0deuk4ZxpzXZmrDHIlrG5NBGLaZDOuII/4xzsUEAzRSxoFyFxrauuNveXpeL5tAUeuI+IF3/YijKu2lBYn9/2Rc5vHXZ8m1jQ2Rqxi/YSxkjEMTiZlkqQAJTQOt66mnnqqeeeaZevyEcSTCfe9736sb+Pe85z1VCEHGXW6++ebqW9/6VuN7hXkNM9WxY8cas0hefvGLX9RC96677rpM4yMCQol8kR8mZCCo+hwNfzpGk4aPmYFt/pjKNhVEsGXWH2Xnd/TRj360Fqwx447fIEIIjZfyoSEOdXAIIZ3HoaOA4/l0KnJHh6JpzC0P53W5BIo5j4hGht5omAWakNPjbBNE/AjafghNaS3tHtpF2ri3lZ8GIdUKIhyNFQ1zuDDF5fVFA874DY0Y9ZX7R/z0M54XJjcECn80YEwkQKtCGKCJffe7362jRk8+JkXE7LwYU+nqzSPImLrNu8SMHgRW7piqTVrko2kGH2X75Cc/WX3jG9+ofv7zn9dhxjTc+fOmuqaO099IdO74/P73v18LZdgghIIRdXnq1KmaL/ngGs0z6nhI3tJ3oy08QqhJEPGsdFyrLb73yyVQjGkOxAiSaLxSOz1+/LjSHxj3dMMJhObQF+Pu1e7QmN1yR8OMMEodptS2MRp6v21+aRqMI33pS1+qbyEgcJjKaATThpDv9NRJF8Hwlre8pQ6L0MMvhAXCg958CDeEV+6YaYcgQwthMgWNcmh4hP/lL39Z/eMf/6gbasLSeCJQacwR6IxjwYJPGPCuMgb0uc99Ln/UZdfknQa/yYUZss0/BGxT3PQeGit/ueO3gzAnr3mjDyvMi5SJ7wj1sZ06BPa6E4jQiHS7TaAoQURVIIgwYdAgRCPCPd1mBGCajoW0pcbYSu5o2DC90MDjH1oIAiBPk8F3Gmwa8FSQ5GnGdVq3mPRoAGNmV4SJT4QF6d/++pRmGm+EF0Io0qHBDqFEPN6hpnwwFkNZ6MmjHRGfGWeYwBBCONJCI8sdDS48+WP8iAacfDDbrWtMjPyGmSpPM971Nv/QbPJ4+TXPT/khbMOkx0w96pJxvjZHWULoDTE3RjrMoLSjGDT8TAkUtY4ozTjfaTyaGpA8nNfDCNDoou2s4xhIp/Gl15w2YjTeH//4xy8lSUOLqYoe7v3333/p/tAvzOCix95W79xPpxoz1oFGEtoRDS7XYXLiuW2CCD80A9LEtIbGiCDCTEdjjmYQWnh8ZzwJ8xvXqUNb+upXv1qPvZCXNs0AAfGpT30qjXrp+9e+9rX6O7Pimhxrl9D++hxCONV4mGwRgoi4CCaEzRA3RBDBGxcdgSHpGmZ5BIpZR7S8qimnxDRut6+0kD4TCqYzGqYuraCr1Jh3xjgaWRrAMKuFNpEu6OxLD8GBcImyoZEx0QHBhJCKtJglh1ALIcN3BvYRVggoxov4jOnnfc89SH/K+IlPfKI1C2iIse6pNdDrHqGpBZe+8Povk0BxprllVtO8S81gMma5Pse0YBokTEBTOwQDZrl3vOMdddKYwriHIAmTUAyEp7stoGH1NZIhhNI8M7DPxI3Pf/7z9W12QMA8icaCZkMDjBaDFsf0dUyUaEZdggiNMcxe6bP4Hqa5Nn/iTuUQsE1ljvT7eEU48ky+CB/m2vDr+4zJJX3h9N8NAosRRPwg6I0PaTB3o2r3rxRDmNKDDo0kzEx9OWTCwJ133tkXrDZ5of3Q6COIEC6//vWv63gx3Zm6Z4yJBpaxm3A0ln1mI8yNaDOhWZEWzwgBF2lt+omQYReKLtfn3xV3v/1iRiS8msbSuvLz5S9/udUE2xVPv/IIFLWOqDy85jglgBAa2stFaDFO0TQzC8HBWAjaR2g4CAVMgzFmgeAgDe6F6QwNiQaRcZ7UERcNoM2h2bC4E2EbgijMTflYUFsaffcRhAzm45rKzP0Ye4sycq/J9WkraInpM6IsaVowYVJGmxuqfTELEMf4Y6qFtqXLfTZnHZp+Vzr6lUWgmHVEZWE1tzkBBsjTQfLcP64RWEyZRnNBkKSOgXR2TYjGMxpU0v3gBz9YB6UhQ3AgJFJtCrMgrkkQdTXeTHigYY4JD6QRg/lTCSKeH4KobeEms9lwaZnqGyP/kU6k1RYVgc2uEJu6MMdRj3ldtqVNh0FB1EZnd+8vxjS3u1W4OyXDNEUDSMPMlM7cZIZAQCNiHROCAU0mNfkgxJhuTTzih+mMxg0NCo0sNCSokR4uf0598/V/IcBSQRTjNG1CI43f9Z2y8Je6yFN6j+8Rrs0/Dw+bVNNjF4vUJJmHj2smYiCIpnBhis2F/xRpm8ZuEShSEMV4Dz9Kfmw0XPSO0x/eblXTbpQmTGr0jhlzSR3CgtlYNLgIkaZGnniMG4XgiIYu0kGLYgYf40JhBiQ9JhLg0qndXEeD26YRIXAwZZFuuitCbESarschvT6XTpMmLOY2xrbGuK985SuDgsPg/e9//6Ww5B9BRB3AJoT0pQCvfwmhwW+LmYCY1VKHYGb6e1/Z+Y2iERG2qS7TNP2+bALFrSOiUcEskvYKucc15hrs+G2NyrKreh6lx2RG48R+b/TQMUcxdoC5jZ2kqT+mOadaS5rzPlMYAoppx2mHhGcxVoEWhUBJXZiA2hrlWLiamxRjvU5fY5w+i+9oazTusQkqDXQIzAgbQjau4zOe2bTdUIRJP3MBgh9jauQBARWTODBlsgEta8hCCBH2odXptvymmAUYeYIjO2jQiWAmYNdvjU1YEfRj9xPk2brlEShqHVEuhPLqwp9eX/xwUn80phhTSO/7ff8IICRYS4TgYTCcP4QP9UbPmQZ6095zKoQwx7GbAfXetGt1mNiaBBwdHBpp0kunmzNmRIOM5tUUr4smDXPMJCMc5r7U5Me9tvLHTMN1FgKTLg72uFTgIITJE9pleh8BgjBhpmHcR6tisgRjdXQc2BKoydExpAOAi7hN4bwngSBQjGmOH3GqCUUB8k9+VENs4Xm8Xbxm5hg98C4X5iK0A8xjQx2MU3PVkHjRqMehb5imYnYWvWvqrq0hHpJ+GoaGlaO2cewVh8DLXRwX0aSBkS8EJA1yCByu41C6973vfXlyvdfEP6jOENoN9YvAT7Wl0OpiYkEUgqnwCCKEVypMWFSMZoUf9ZhrdMRnB2/KiiaJwNZJoI9AMYIozCh9BUJY0ZtNe8Z9cQjbZWYgPg3ImDT7nrkf/piW6L0OcYyFdJ2WmqfBeA3HZ+cutFF4tZm8iEPjxh8mJ8xFjLvEcQ2M5UTjn6efXkejzjPTZ8WkB96Fe+6555LWQQNKHIQz2g7Ppt7RStL4PAPNB8e6JPxoyJlIQVzCp40z4fJ3g+fwR+OPwKNhRpNqariJv22H4IBHroHBGcEEf/yj/jAB4odWmd7HH02ILYUw6eVHtiO4eOcw38VMxm2XzfTLJlDUOiKEy1C3jiCKRq3tGUMaxra4B3WfXm00LFPngYYqb7x5RjwPnk3+eT7II406vWgatsdX04uJ1yTk8rhRZwiT9Fk0rPgxFpKuuyH9ONSNtKjT++67r3FMisYXf7YjokzsiICGiYaEiTHKGXlquiYuQogfWrhcgMX9bX5SFrjCqWl7JbQiyoYwCkGJYKVumEyBdsj3cNQ9HLiPME/Hrej8EDfOMoo4fkqgi8ChVaM9vIXvSmliP3qQqTmFhoAf1BCHeSfvoXbFw+zXZ8Iaa4bqet4u+9EbpnGi15yagIaUmTpGWDCFOBUsbXFpPDGVsX1O3sBSn7mZj/GOEET02IkXwqzpGfk7iHaDqalJe0Zj5/0k3+m7Rx4xEyKoeCbvWpfL8xxh2XgVN0RAR5z45JlogOQPTTZ3cEGLxNSWmrXRksk7Qoe8pw7tjrLlgpXmhPSIs46j/uFOOVOO66S1q3HoIHW9t33lzt/rvvDb9qejVowgwjTCX5/j5W37MbfFVRC1kfH+lAQYA4sJEm3pjn1329Lx/u4S2EVBVMwYET2AIYKorSdNjxWBk2pZl17Vld/eaqfkLvfKanDeHloXIf3QenxHfA8kMI5AUeuI+IEjROhVtlkTEVbrqKwXVyaGI6vB3C53bjXbaGWT6Qqi38IJbNpTXTg+i79gAnvpQOrcOWCbx4ad2+gRUjQC/OkkIAEJSKAsAsWY5gJraEZch2akOSTo+CkBCUigPALFCaIUsQIopeF3CUhAAuURwCq3V162zbEEJCABCewSgcWcR7TuRIZdqmzLIgEJSGCOBNSI5lgr5kkCEpDAgggoiBZU2RZVAhKQwNwIFLWOaJvwLq7WCD17552djzjqGqJOPnpKQAISWJdAUeuI1i2k8SQgAQlIYL4Eipy+zVY/bNcT64jYWoXJCPlC1/liN2cSkIAEJBAEihJE7B7MzrEhgKIQCCX+2Gdurb3mIiE/JSABCUhgXwkUtY4I4dMkhFJioSml9/wuAQlIQALzJrDHjIUSHLtn55pQU76H7NDdFM97EpCABCRwMASKmb499FA8wg0RWAeD26dKQAISkEBOoBhBNEa4jAmbA/FaAhKQgAT2jwBWuWIE0RgsboY6hpZhJSABCRwsgWLWEQ098A4h1CSIiN94OuvB8vfpEpCABBZPoBiNCEHSJGDyGvRwvJyI1xKQgATmTaAYQQRGNJouYcQaIhe1zvuFM3cSkIAEUgKsIypqQSs7KHBUeKwXikkJ3EcT4lMnAQlIQAJlESjuPCI0Is1vZb1k5lYCEpBAFwFViC46+klAAhKQwNYJLEYQsTMDWwTpJCABCUhgPgR2dh3RfBCbEwlIQAIS6CNQzDqivoLoLwEJSEACZRJYjGmuzOox1xKQgAR2n4CCaPfr2BJKQAISmC2Bos4jaqIY64ia/LwnAQlIQAJlEChuHRHC5+WXX65PZA3ELGTt21WBLYKG7lcX6fopAQlIQALbJ1CUaY7jwM+ePXuZEAJRHCHuoXjbf2F8ggQkIIGpCRQliNCEulxs/dMVRj8JSEACEpgPgaLWESFkhowJ9Qmr+eA3JxKQgAQkAIFi1hFhlhviEFZDjxUfkp5hJCABCUhguwSKMs1tF4WpS0ACEpDAQRAoRhB1nUOUg2sK615zOSWvJSABCRw8gaLWEQ098I6p3E2C6OBxmwMJSEACEmgisMeMhRIca4CGHHzHeiKdBCQgAQmUQ6AY0xxIPSq8nBfLnEpAAhIYSqCoo8IxuR09evTSUeHMjuMeZruhGtNQMIaTgAQkIIHtE8AqV5QgCiSY3zTBBQ0/JSABCZRN4NCpU6cuznGciNNUMcXthxuy9mjI+NR+5NVnzJtA10QZ37N5110puet6x4aUYT/b1iH5IUyRGtHQwg0NF+a9oeENJ4F1CPierUPNOEsgUNRkhSVUiGWUgAQksCQCRa0jWlLFWFYJSEACSyJQzDqiJVWKZZWABCSwJAKa5pZU25ZVAhKQwAwJHFrN5Lk4w3xVU8/sYK85dvDer5l4c2RqniQgAQlM3bZOQVSNaAqKpiEBCUhAAmsTKOY8orVLaEQJSEACEpg1ATWiWVePmZOABCSw+wQURLtfx5ZQAhKQwGwJuI5otlVjxiQgAQksh8DhOe4ztw387M7Nn04CEpCABOZFYLYtM1OtmWaok4AEJCCB6QjQts7N1btvk6mlaEZzqwDzIwEJSGCpBBgfwjlZYalvgOWWgAQkMBMCCqKZVITZkIAEJLBUAgqipda85ZaABCQwEwIKoplUhNmQgAQksFQCCqKl1rzlloAEJDATAgqimVSE2ZCABCSwVAIKoqXWvOWWgAQkMBMCCqKZVITZkIAEJLBUAgqipda85ZaABCQwEwKXtviJFa59+XIHhj5C+ktAAhJYNoGh8iQoXRJEcWPoZ/6gXEDp/9rWFcFTPvcGivrT98P3I30h/H3s1u8jrdsh3/8PY3ZbdKdPyDsAAAAASUVORK5CYII="
			};
		},
		mounted(){
			if (!localStorage.getItem("_vt")) {
				location.hash = "/";
				return;
			}
		},
		methods: {
			updateImg: function(e){
				var that = this;
				$("#imgUpload").change(function(e) {  
		            var file = e.target.files[0];            
		            var freader = new FileReader();  
		            freader.readAsDataURL(file);  
		            freader.onload = function(e) {
		              that.expressSingle = e.target.result;
		          	}  
		        });  
			}
		},
		watch: {
			items: {
				handler: function(){
					if (this.$refs.name.value && this.$refs.num.value) {
						this.activeConfirm = true;
					}else{
						this.activeConfirm = false;
					}
				},
				deep: true
			}
		}
	}
</script>