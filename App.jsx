import { useNavigate } from 'react-router-dom'

function FoodCard({ product }) {
  const navigate = useNavigate()
  const { product_name, brands, nutriments, image_small_url, code } = product

  const handleClick = () => {
    navigate(`/product/${code}`)
  }

  const energy = nutriments['energy-kcal_100g'] ?? nutriments['energy-kcal'] ?? null
  const fat = nutriments['fat_100g'] ?? null
  const carbs = nutriments['carbohydrates_100g'] ?? null
  const protein = nutriments['proteins_100g'] ?? null

  return (
    <div className="food-card" onClick={handleClick}>
      {image_small_url && (
        <img src={image_small_url} alt={product_name} className="food-card-img" />
      )}
      <div className="food-card-body">
        <h3 className="food-card-name">{product_name}</h3>
        {brands && <p className="food-card-brand">{brands}</p>}
        <ul className="food-card-nutrients">
          {energy !== null && <li><span>Energy</span><strong>{Math.round(energy)} kcal</strong></li>}
          {fat !== null && <li><span>Fat</span><strong>{fat}g</strong></li>}
          {carbs !== null && <li><span>Carbs</span><strong>{carbs}g</strong></li>}
          {protein !== null && <li><span>Protein</span><strong>{protein}g</strong></li>}
        </ul>
        <p className="food-card-hint">Click for full details →</p>
      </div>
    </div>
  )
}

export default FoodCard
