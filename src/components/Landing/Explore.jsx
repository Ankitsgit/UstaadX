import { Button } from "../Ui/Button";
import { Badge } from "../Ui/Badge";
import { Card,CardContent} from "../Ui/Card";
import { Avatar, AvatarImage, AvatarFallback  } from "../Ui/Avatar";
import { Link, useNavigate } from 'react-router-dom';

import { useEffect, useState } from "react";
import axios from "axios";
import {
  Lock,
  Heart,
  MessageCircle,
  Calendar,
  Star,
} from "lucide-react";



const categoryColors = {
  Design: "bg-purple-100 text-purple-800",
  Music: "bg-green-100 text-green-800",
  Art: "bg-pink-100 text-pink-800",
  Fitness: "bg-blue-100 text-blue-800",
  Tech: "bg-orange-100 text-orange-800",
  Dance: "bg-yellow-100 text-yellow-800",
  General: "bg-gray-100 text-gray-800",
};

const Explore = () => {
  const [posts, setPosts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();
  const fetchPosts = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/users/explore`
      );
      setPosts(res.data);
    } catch (err) {
      console.error("❌ Failed to fetch explore posts", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const categories = [
    "All",
    ...new Set(posts.map((post) => post.category || "General")),
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold font-heading">
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
              Explore
            </span>{" "}
            Recent Posts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Discover what others are offering and find your perfect skill match.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "hero" : "ghost"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full font-medium capitalize"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPosts.map((post, index) => (
            <Card
              key={post.id}
              className="group relative overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03] rounded-2xl"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-6 space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={post.teacherAvatar} alt={post.teacher} />
                      <AvatarFallback className="bg-indigo-500 text-white font-bold">
                        {post.teacher
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg font-heading">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        by {post.teacher}
                      </p>
                    </div>
                  </div>
                  <Badge
                    className={`${
                      categoryColors[post.category] || categoryColors["General"]
                    } border-0 font-semibold capitalize`}
                  >
                    {post.category || "General"}
                  </Badge>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground font-body">
                  {post.description}
                </p>

                {/* Exchange Info */}
                <div className="bg-gradient-to-br from-indigo-100 to-purple-100 text-indigo-900 border border-indigo-300 p-3 rounded-lg text-sm font-medium">
                  {post.exchange}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4 text-red-500" />
                      {post.likes}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      {post.comments}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      {post.rating}
                    </div>
                  </div>
                </div>

                {/* Lock Overlay */}
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center rounded-2xl">
                  <div className="text-center text-white space-y-2">
                    <Lock className="w-8 h-8 mx-auto" />
                    <p className="font-semibold">Login to Connect</p>
                    <p className="text-sm opacity-90">
                      Join to start learning together!
                    </p>
                    <Button 
                     onClick={() => {
                      navigate(`/login`)
                    }}
                    
                    variant="hero" size="sm" className="mt-1"
                    >
                      🔓 Explore More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <Button
            variant="glass"
            size="lg"
            className="font-semibold flex items-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            Load More Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Explore;
