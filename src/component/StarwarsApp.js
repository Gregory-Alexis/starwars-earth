import { useState, useEffect } from "react"
import "../index.css"

const StarwarsApp = () => {
	const [climats, setClimat] = useState("")
	const [earthName, setEarthName] = useState([])
	const [population, setPopulation] = useState("")
	const [loading, setLoading] = useState(true)
	const [readMore, setReadMore] = useState(false)

	useEffect(() => {
		const url = `https://swapi.dev/api/planets/`

		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error("planet introuvable")
				}
				return response.json()
			})
			.then((data) => {
				console.log(data)
				setEarthName((earthName) => [...earthName, ...data.results])
				setLoading(false)
			})
			.catch((error) => {
				alert(error.message)
			})
	}, [])
	return (
		<section>
			<h1 className="container py-5 text-center">
				Planètes dans l'univers Star Wars
			</h1>
			<div className="mb-5 ">
				<div className="row justify-content-center">
					{earthName.map((el) => {
						const { name, population, climate } = el
						return (
							<div
								key={name.name}
								className="m-2 col-md-6 col-lg-4 col-xl-3 mb-4"
							>
								<article className="bg-warning p-3">
									<h2>{name}</h2>
									<p>
										<b>population</b>
									</p>
									<p>{population}</p>
									<p>
										<b>Climat</b>
									</p>
									<p>{climate}</p>
								</article>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default StarwarsApp
