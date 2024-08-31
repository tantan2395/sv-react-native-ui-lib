echo "Removing node_modules"
rm -rf "node_modules/"
echo "Removing example/node_modules"
rm -rf "example/node_modules/"

echo "Installing packages..."
npm install 
npx yarn install