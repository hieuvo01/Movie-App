const getImagePath = (imagePath?: string, fullSize?: boolean) => {
	return imagePath ? (
		`https://image.tmdb.org/t/p/${fullSize ? 'original' : 'w-500'}/${imagePath}`
	) : 'https://links.papareact.com/a8z';
}