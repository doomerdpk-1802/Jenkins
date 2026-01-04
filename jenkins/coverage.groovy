stage('Coverage') {
    sh '''
      echo "Running Coverage check..."
      yarn test:coverage
    '''
}
