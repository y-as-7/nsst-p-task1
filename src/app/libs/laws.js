import React from 'react'

export default function getLaws(id) {
  const laws = [
    {
      id: 1,
      title: "Newton's first law ",
      law: "",
      article1:
        "An object at rest remains at rest, and an object in motion remainsin motion at constant speed and in a straight line unless acted onby an unbalanced force.",
      article2: {
        title: "Examples of inertia involving aerodynamics:",
        para: "The motion of an airplane when a pilot changes the throttle setting of an engine.The motion of a ball falling down through the atmosphere.A model rocket being launched up into the atmosphere.The motion of a kite when the wind changes.",
      },
    },
    {
      law: "F= m * a",
      id: 2,
      title: "Newton's second law ",
      article1: `The acceleration of an object depends on the mass of the object and the amount of force applied.His second law defines a force to be equal to change in momentum (mass times velocity) per change in time. Momentum is defined to be the mass m of an object times its velocity V.`,
      article2: {
        title: "F= m * a",
        para: "The acceleration of an object depends on the mass of the object and the amount of force applied.His second law defines a force to be equal to change in momentum (mass times velocity) per change in time. Momentum is defined to be the mass m of an object times its velocity V.",
      },
    },

    {
      id: 3,
      title: "Newton's third law ",
      article1: `Whenever one object exerts a force on a second object, the second object exerts an equal and opposite force on the first.His third law states that for every action (force) in nature there is an equal and opposite reaction. If object A exerts a force on object B, object B also exerts an equal and opposite force on object A. In other words, forces result from interactions.`,
      article2: {
        title: "Examples of action and reaction involving aerodynamics:",
        para: `The motion of lift from an airfoil, the air is deflected downward by the airfoil’s action, and in reaction, the wing is pushed upward.
The motion of a spinning ball, the air is deflected to one side, and the ball reacts by moving in the opposite
The motion of a jet engine produces thrust and hot exhaust gases flow out the back of the engine, and a thrusting force is produced in the opposite direction.`,
      },
    },
    {
      id: 4,
      title: "Finding vector magnitude ",
      article1: `The magnitude of a vector formula helps to summarize the numeric value for a given vector. A vector has a direction and a magnitude. The individual measures of the vector along the x-axis, y-axis, and z-axis are summarized using this magnitude of a vector formula. It is denoted by |v|. The magnitude of a vector is always a positive number or zero, i.e., it cannot be a negative number. Let us understand the magnitude of a vector formula using a few solved examples in the end.`,
      article2: {
        title: "What is the Magnitude of a Vector?",
        para: "The magnitude of a vector A is the length of the vector and is denoted by |A|. It is the square root of the the sum of squares of the components of vector. For a given vector with direction ratios along the x-axis, y-axis, and z-axis, the magnitude of the vector is equal to the square root of the sum of the squares of its direction ratios. This can be clearly understood from the below magnitude of a vector formula",
      },
    },
    {
      id: 5,
      title: "Finding vector direction ",
      article1: `The direction of a vector is the orientation of the vector, that is, the angle it makes with the x-axis. A vector is drawn by a line with an arrow on the top and a fixed point at the other end. The direction in which the arrowhead of the vector is directed gives the direction of the vector. For example, velocity is a vector. It gives the magnitude at which the object is moving along with the direction towards which the object is moving. Similarly, the direction in which a force is applied is given by the force vector. The direction of a vector is denoted by 
→
a
=
|
a
|
^
a
, where |a| denotes the magnitude of the vector, whereas 
^
a
 is a unit vector and denotes the direction of the vector a`,
      article2: {
        title: "Direction of a Vector Formula",
        para: "The direction of a vector formula is related to the slope of a line. We know that the slope of a line that passes through the origin and a point (x, y) is y/x. We also know that if θ is the angle made by this line, then its slope is tan θ, i.e., tan θ = y/x. Hence, θ = tan-1 (y/x). Thus, the direction of a vector (x, y) is found using the formula tan-1 (y/x) but while calculating this angle, the quadrant in which (x, y) lies also should be considered.",
      },
    },
    {
      id: 6,
      title: "Finding a+b",
      article1: `
      To add or subtract two vectors, add or subtract the corresponding components.

Let u⃗ =⟨u1,u2⟩
 and v⃗ =⟨v1,v2⟩
 be two vectors.

Then, the sum of u⃗ 
 and v⃗ 
 is the vector

u⃗ +v⃗ =⟨u1+v1,u2+v2⟩

The difference of u⃗ 
 and v⃗ 
 is

u⃗ −v⃗ =u⃗ +(−v⃗ )           =⟨u1−v1,u2−v2⟩

The sum of two or more vectors is called the resultant. The resultant of two vectors can be found using either the parallelogram method or the triangle method .`,
      article2: {
        title: "",
        para: "",
      },
    },
    {
      id: 7,
      title: "Finding a-b",
      article1: `We can do vector subtraction just like how we do the subtraction of scalars. We subtract the corresponding components of vectors while subtracting vectors. The graphical interpretation of vector subtraction can be understood by using the parallelogram law and triangle law of addition.

Let us learn more about vector subtraction along with geometrical interpretation and examples.`,
      article2: {
        title: "What is Vector Subtraction?",
        para: `
        The vector subtraction of two vectors a and b is represented by a - b and it is nothing but adding the negative of vector b to the vector a. i.e., a - b = a + (-b). Thus, subtraction of vectors involves the addition of vectors and the negative of a vector. The result of vector subtraction is again a vector. The following are the rules for subtracting vectors:

It should be performed between two vectors only (not between one vector and one scalar).
Both vectors in the subtraction should represent the same physical quantity.
Let us understand how to subtract vectors graphically in the upcoming sections.`,
      },
    },
    {
      id: 8,
      title: "Finding a*b",
      article1: `Multiplication of vectors is of two types. A vector has both magnitude and direction and based on this the two ways of multiplication of vectors are the dot product of two vectors and the cross product of two vectors. The dot product of two vectors is also referred to as scalar product, as the resultant value is a scalar quantity. The cross product is called the vector product as the result is a vector, which is perpendicular to these two vectors.

Let us learn about the two multiplication of vectors, the working rule, properties, uses, examples of this multiplication of vectors.`,
      article2: {
        title: "How To Do Multiplication of Vectors?",
        para: `Let a and b be two non-zero vectors, and θ be the included angle of the vectors. Then the scalar product or dot product is denoted by a.b, which is defined as:


a
.

b
 = 
|

a
|
|

b
|
 cos θ.

Here, 
|

a
|
 is the magnitude of 

a
, 
|

b
|
 is the magnitude of 

b
, and θ is the angle between them.`,
      },
    },
    {
      id: 9,
      title: "Finding a×b",
      article1: `The vector product and the scalar product are the two ways of multiplying vectors which see the most application in physics and astronomy. The magnitude of the vector product of two vectors can be constructed by taking the product of the magnitudes of the vectors times the sine of the angle (<180 degrees) between them. The magnitude of the vector product can be expressed in the form:`,
      article2: {
        title: "",
        para: "",
      },
    },
    {
      id: 10,
      title: "deriving velocity from distance",
      article1: `The indefinite integral is commonly applied in problems involving distance, velocity, and acceleration, each of which is a function of time. In the discussion of the applications of the derivative, note that the derivative of a distance function represents instantaneous velocity and that the derivative of the velocity function represents instantaneous acceleration at a particular time. In considering the relationship between the derivative and the indefinite integral as inverse operations, note that the indefinite integral of the acceleration function represents the velocity function and that the indefinite integral of the velocity represents the distance function.
In case of a free‐falling object, the acceleration due to gravity is –32 ft/sec 2. The significance of the negative is that the rate of change of the velocity with respect to time (acceleration), is negative because the velocity is decreasing as the time increases. Using the fact that the velocity is the indefinite integral of the acceleration, you find that `,
      article2: {
        title: "",
        para: "",
      },
    },
    {
      id: 11,
      title: "deriving acceleration from velocity",
      article1: `The derivative of acceleration with respect to time is jerk, as Pradip Kattel said.

But you asked for the derivative of acceleration with respect to velocity (if there is no typo in your question).

So you’re asking for da/dv

Divide the top and bottom by dt

(da/dt)/(dv/dt)

So it would be jerk divided by acceleration. And there is no special name for it.`,
      article2: {
        title: "",
        para: "",
      },
    },
    {
      id: 12,
      title: "deriving acceleration from distance",
      article1: ` as follows. We can rewrite the average velocity, 𝑣 a v , as 𝑣 = 𝑣 + 𝑢 2 , a v where 𝑣 is the final velocity and 𝑢 is the initial velocity. We can use our definition of acceleration as 𝑎 = Δ 𝑣 Δ 𝑡 to rewrite Δ 𝑡 as Δ 𝑡 = Δ 𝑣 𝑎 = 𝑣 − 𝑢 𝑎 `,
      article2: {
        title: "",
        para: "",
      },
    },
    {
      id: 13,
      title: "Finding angular velocity from velocity",
      article1: `Knowing v and r, we can use the second relationship in v = rω, ω=vr ω = v r to calculate the angular velocity. To calculate the angular velocity, we will use the following relationship: ω=vr. ω = v r .
`,
      article2: {
        title: "",
        para: "",
      },
    },
    {
      id: 14,
      title: "Finding angular acceleration from velocity",
      article1: `In non-uniform circular motion, the velocity changes with time and the rate of change of angular velocity (i.e. angular acceleration) is α=ΔωΔt. α = Δ ω Δ t . Linear or tangential acceleration refers to changes in the magnitude of velocity but not its direction, given as at=ΔvΔt. a t = Δ v Δ t .
`,
      article2: {
        title: "",
        para: "",
      },
    },
  ];
  if(id){
    return laws.filter(law=>law.id ==id )
  }
  return laws;
}
