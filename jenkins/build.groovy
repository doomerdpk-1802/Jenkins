stage('Build Next.js App') {
  sh '''
      echo "Running build..."
      yarn build
    '''
}