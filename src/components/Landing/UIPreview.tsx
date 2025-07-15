// import { Card, CardContent } from "../Ui/Card";
// import { Badge } from "../Ui/Badge";
// import { Button } from "../Ui/Button";
// import { Avatar, AvatarFallback } from "../Ui/Avatar";
// import { MessageCircle, Star, Calendar, Video } from "lucide-react";

// const UIPreview = () => {
//   return (
//     <section className="py-20 px-4" id="preview">
//       <div className="container mx-auto">
//         <div className="text-center mb-16 animate-fade-in-up">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
//             Experience the <span className="gradient-text">Platform</span>
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Get a glimpse of our beautiful, intuitive interface designed for seamless skill exchanges
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Mobile mockup */}
//           <div className="animate-slide-in-left">
//             <Card className="glass-card border-0 max-w-sm mx-auto lg:mx-0 overflow-hidden">
//               <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6">
//                 <div className="flex items-center justify-between mb-6">
//                   <h3 className="font-heading font-semibold">Your Matches</h3>
//                   <Badge variant="secondary" className="bg-accent text-white">3 New</Badge>
//                 </div>

//                 {/* Match cards */}
//                 <div className="space-y-4">
//                   <Card className="border-0 bg-white/80 backdrop-blur-sm">
//                     <CardContent className="p-4">
//                       <div className="flex items-center space-x-3">
//                         <Avatar>
//                           <AvatarFallback className="bg-primary text-white">AR</AvatarFallback>
//                         </Avatar>
//                         <div className="flex-1">
//                           <div className="flex items-center space-x-2">
//                             <span className="font-medium">Arjun Rao</span>
//                             <div className="flex">
//                               {[...Array(5)].map((_, i) => (
//                                 <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
//                               ))}
//                             </div>
//                           </div>
//                           <p className="text-xs text-muted-foreground">Wants to learn: React.js</p>
//                           <p className="text-xs text-primary font-medium">Teaches: Guitar</p>
//                         </div>
//                       </div>
//                       <div className="flex gap-2 mt-3">
//                         <Button size="sm" className="flex-1 h-8 text-xs">
//                           <MessageCircle className="h-3 w-3 mr-1" />
//                           Chat
//                         </Button>
//                         <Button size="sm" variant="outline" className="flex-1 h-8 text-xs">
//                           <Calendar className="h-3 w-3 mr-1" />
//                           Schedule
//                         </Button>
//                       </div>
//                     </CardContent>
//                   </Card>

//                   <Card className="border-0 bg-white/80 backdrop-blur-sm">
//                     <CardContent className="p-4">
//                       <div className="flex items-center space-x-3">
//                         <Avatar>
//                           <AvatarFallback className="bg-accent text-white">PR</AvatarFallback>
//                         </Avatar>
//                         <div className="flex-1">
//                           <div className="flex items-center space-x-2">
//                             <span className="font-medium">Priya Sharma</span>
//                             <div className="flex">
//                               {[...Array(4)].map((_, i) => (
//                                 <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
//                               ))}
//                             </div>
//                           </div>
//                           <p className="text-xs text-muted-foreground">Wants to learn: Figma</p>
//                           <p className="text-xs text-primary font-medium">Teaches: Spanish</p>
//                         </div>
//                       </div>
//                       <div className="flex gap-2 mt-3">
//                         <Button size="sm" className="flex-1 h-8 text-xs">
//                           <MessageCircle className="h-3 w-3 mr-1" />
//                           Chat
//                         </Button>
//                         <Button size="sm" variant="outline" className="flex-1 h-8 text-xs">
//                           <Video className="h-3 w-3 mr-1" />
//                           Video Call
//                         </Button>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </div>
//             </Card>
//           </div>

//           {/* Features list */}
//           <div className="space-y-8 animate-slide-in-right">
//             <div>
//               <h3 className="text-2xl font-heading font-bold mb-4 gradient-text">
//                 Built for Gen Z Learners
//               </h3>
//               <p className="text-muted-foreground text-lg leading-relaxed">
//                 Our interface is designed with young learners in mind - intuitive, fast, and beautiful.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <Card className="glass-card border-0 p-4">
//                 <div className="flex items-center space-x-3">
//                   <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center">
//                     <MessageCircle className="h-5 w-5 text-blue-500" />
//                   </div>
//                   <div>
//                     <h4 className="font-medium">Instant Messaging</h4>
//                     <p className="text-xs text-muted-foreground">Real-time chat</p>
//                   </div>
//                 </div>
//               </Card>

//               <Card className="glass-card border-0 p-4">
//                 <div className="flex items-center space-x-3">
//                   <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
//                     <Video className="h-5 w-5 text-purple-500" />
//                   </div>
//                   <div>
//                     <h4 className="font-medium">Video Sessions</h4>
//                     <p className="text-xs text-muted-foreground">Face-to-face learning</p>
//                   </div>
//                 </div>
//               </Card>

//               <Card className="glass-card border-0 p-4">
//                 <div className="flex items-center space-x-3">
//                   <div className="w-10 h-10 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center">
//                     <Star className="h-5 w-5 text-green-500" />
//                   </div>
//                   <div>
//                     <h4 className="font-medium">Rating System</h4>
//                     <p className="text-xs text-muted-foreground">Quality assurance</p>
//                   </div>
//                 </div>
//               </Card>

//               <Card className="glass-card border-0 p-4">
//                 <div className="flex items-center space-x-3">
//                   <div className="w-10 h-10 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center">
//                     <Calendar className="h-5 w-5 text-orange-500" />
//                   </div>
//                   <div>
//                     <h4 className="font-medium">Smart Calendar</h4>
//                     <p className="text-xs text-muted-foreground">Easy scheduling</p>
//                   </div>
//                 </div>
//               </Card>
//             </div>

//             <div className="flex gap-4">
//               <Button className="btn-primary">
//                 Try the App
//               </Button>
//               <Button variant="outline" className="glass-card">
//                 View Screenshots
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default UIPreview