import { Typography } from "@material-tailwind/react"
import CurvedLineBreak from "../fragments/CurvedLineBreak"
const Introduction = () => {
    return(
        <>
        <div className="m-auto">
            <Typography
            variant="lead"
            color="blue-gray"
            className="p-1 font-logoFont text-center"
            >
                "Welcome to Whipped Wonders – Where Every Bite Tells a Story!"
            </Typography>
        </div>
        
      <CurvedLineBreak/>

      <Typography
        variant="small"
        color="blue-gray"
        className="p-1 font-paragraphFont text-justify"
      >
        At Whipped Wonders, we create irresistibly delicious cupcakes inspired by classic South African desserts, blending tradition with indulgent creativity. Whether you're enjoying our signature flavors or celebrating with a custom cake, our treats are crafted to delight your taste buds and elevate your special moments.
        Tailored for those who appreciate the finer things, our confections are as beautiful as they are delectable.<b> Experience the sweetness of South Africa, one bite at a time!</b>
</Typography>
        </>
    )
}

export default Introduction