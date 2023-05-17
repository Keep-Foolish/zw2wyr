import axios from 'axios'

const baseURL = "http://wuliu.market.alicloudapi.com"
const Authorization = "AppCode 314d48fe65ad4682b968077b16fd454f"

const getInformation = axios.create({
	baseURL,
})

async function getdata(number) {
	const response = await getInformation.get('/kdi',{
		params:{
			no:number,
		},
		headers: {'Authorization': Authorization},
	}
)
	return response
}

export {
	getdata,
}